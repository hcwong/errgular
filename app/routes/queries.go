package routes

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/hcwong/errgular/app/tables"

	"github.com/pkg/errors"
)

// TODO: Create a foreign key to link the ids of the two tables together
const qCreateErrorsTable = "create table if not exists errors (id serial primary key, project_name varchar(255) not null, error_code int not null)"
const qCreateIndProjectsTable = "create table if not exists %s (error_code int not null, description varchar(255), incident_time timestamp default current_timestamp)"
const qInsertNewEvent = "insert into %s (error_code, description) values (%d, '%s')"
const qCheckErrorTypeExists = "select * from errors where project_name='%s' and error_code=%d"
const qAddErrorTypeToErrors = "insert into errors (project_name, error_code) values ('%s', %d)"

var db tables.ConnPool

// InitializeDb creates the db conn and creates the necessary tables if they are not created
func InitializeDb() {
	log.Println("Setting up the database")
	db = tables.CreateDb()
	err := createTable("errorsTable")
	if err != nil {
		log.Fatal("Failed to create errors table in InitializeDb")
	}
}

func createTable(queryType string) (err error) {
	var queryToExecute string
	switch queryType {
	case "errorsTable":
		queryToExecute = qCreateErrorsTable
	default:
		queryToExecute = fmt.Sprintf(qCreateIndProjectsTable, queryType)
	}
	_, err = db.Db.Exec(queryToExecute)
	if err != nil {
		err = errors.Wrapf(
			err,
			"Could not create errors table",
		)
		return err
	}
	return nil
}

// AddNewEvent handles the queries for AddEvent route handler
func AddNewEvent(data *ErrgularReq) (err error) {
	log.Println("Adding a New Error into the appropriate table")
	name, errMsg := data.Name, data.ErrMsg
	code := data.Code
	existErr := createTable(name)
	if existErr != nil {
		err = existErr
		return err
	}
	errorExists := checkErrorTypeExist(name, code)
	if errorExists != nil {
		err = errorExists
		return err
	}
	insertQuery := fmt.Sprintf(qInsertNewEvent, name, code, errMsg)
	_, insertErr := db.Db.Exec(insertQuery)
	if insertErr != nil {
		err = insertErr
		return err
	}
	return nil
}

func checkErrorTypeExist(name string, code int) (err error) {
	checkErrorTypeExistQuery := fmt.Sprintf(qCheckErrorTypeExists, name, code)
	rows, checkErr := db.Db.Query(checkErrorTypeExistQuery)
	if checkErr != nil {
		err = errors.Wrapf(
			checkErr,
			"Something went wrong when checking the errors table",
		)
		fmt.Println("returning error")
		return err
	}
	defer rows.Close()
	count := checkRowsCount(rows)
	if count == 0 {
		insertErrorQuery := fmt.Sprintf(qAddErrorTypeToErrors, name, code)
		_, insertErr := db.Db.Exec(insertErrorQuery)
		if insertErr != nil {
			err = errors.Wrapf(
				insertErr,
				"Something went wrong while inserting new type of error into errors table",
			)
			return err
		}

	}
	return nil
}

func checkRowsCount(rows *sql.Rows) (count int) {
	count = 0
	for rows.Next() {
		count++
	}
	return count
}
