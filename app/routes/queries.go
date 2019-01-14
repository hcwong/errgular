package routes

import (
	"fmt"
	"log"
	"time"

	"github.com/hcwong/errgular/app/tables"
	"github.com/jmoiron/sqlx"

	"github.com/pkg/errors"
)

// TODO: Create a foreign key to link the ids of the two tables together
const qCreateErrorsTable = "create table if not exists errors (id serial primary key, project_name varchar(255) not null, error_code int not null)"
const qCreateIndProjectsTable = "create table if not exists %s (error_code int not null, description varchar(255), incident_time timestamp default current_timestamp)"
const qInsertNewEvent = "insert into %s (error_code, description) values ($1, $2)"
const qCheckErrorTypeExists = "select * from errors where project_name=$1 and error_code=$2"
const qAddErrorTypeToErrors = "insert into errors (project_name, error_code) values ($1, $2)"
const qChooseProj = "select * from errors where project_name=$1"
const qGetAllErrors = "select * from $1"

var Database tables.ConnPool

type errorExample struct {
	error_code    int
	description   string
	incident_time time.Time
}

// InitializeDb creates the db conn and creates the necessary tables if they are not created
func InitializeDb() {
	log.Println("Setting up the database")
	Database = tables.CreateDb()
	err := CreateTable("errors", Database)
	if err != nil {
		log.Fatal("Failed to create errors table in InitializeDb")
	}
}

func CreateTable(queryType string, db tables.ConnPool) (err error) {
	var createErr error
	switch queryType {
	case "errors":
		_, createErr = db.Db.Exec(qCreateErrorsTable)
	default:
		_, createErr = db.Db.Exec(fmt.Sprintf(qCreateIndProjectsTable, queryType))
	}
	if createErr != nil {
		err = errors.Wrapf(
			createErr,
			"Could not create errors table",
		)
		return err
	}
	return nil
}

// AddNewEvent handles the queries for AddEvent route handler
func AddNewEvent(data *ErrgularReq, db tables.ConnPool) (err error) {
	log.Println("Adding a New Error into the appropriate table")
	name, errMsg := data.Name, data.ErrMsg
	code := data.Code
	existErr := CreateTable(name, db)
	if existErr != nil {
		err = existErr
		return err
	}
	errorExists := checkErrorTypeExist(name, code, db)
	if errorExists != nil {
		err = errorExists
		return err
	}
	insertNewEventQuery := fmt.Sprintf(qInsertNewEvent, name)
	_, insertErr := db.Db.Exec(insertNewEventQuery, code, errMsg)
	if insertErr != nil {
		err = insertErr
		return err
	}
	return nil
}

func checkErrorTypeExist(name string, code int, db tables.ConnPool) (err error) {
	rows, checkErr := db.Db.Queryx(qCheckErrorTypeExists, name, code)
	if checkErr != nil {
		err = errors.Wrapf(
			checkErr,
			"Something went wrong when checking the errors table",
		)
		return err
	}
	defer rows.Close()
	count := checkRowsCount(rows)
	if count == 0 {
		addErr := addNewErrortoErrors(db, name, code)
		if addErr != nil {
			err = addErr
			return err
		}
	}
	return nil
}

func checkErrorExist(name string, db tables.ConnPool) (err error) {
	_, checkErr := db.Db.Queryx(qChooseProj, name)
	if checkErr != nil {
		err = errors.Wrapf(checkErr, "Something went wrong when checking errors table")
		fmt.Println("returning error")
		return err
	}
	// Assume that if there are no errors then the table must exist
	return nil
}

func GetAllErrorInstances(name string, db tables.ConnPool) []errorExample {
	var allErrors []errorExample

	fmt.Println(name)	
	// bug with the db query
	rows, _ := db.Db.Queryx(qGetAllErrors, name)
	defer rows.Close()
	for rows.Next() {
		var errorInstance errorExample
		err := rows.Scan(&errorInstance.error_code,
						 &errorInstance.description,
						 &errorInstance.incident_time)
		if err != nil {
			log.Fatal(err)
		}
		allErrors = append(allErrors, errorInstance)
	}
	err := rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	return allErrors
}

func addNewErrortoErrors(db tables.ConnPool, name string, code int) (err error) {
	_, insertErr := db.Db.Exec(qAddErrorTypeToErrors, name, code)
	if insertErr != nil {
		err = errors.Wrapf(
			insertErr,
			"Something went wrong while inserting new type of error into errors table",
		)
		return err
	}
	return nil
}

func checkRowsCount(rows *sqlx.Rows) (count int) {
	count = 0
	for rows.Next() {
		count++
	}
	return count
}
