package routes

import (
	"fmt"
	"log"

	"github.com/hcwong/errgular/tables"

	"github.com/pkg/errors"
)

// TODO: Create a foreign key to link the ids of the two tables together
const qCreateErrorsTable = "create table if not exists errors (error_id integer primary key, project_name varchar(255) not null, error_code int not null)"
const qCreateIndProjectsTable = "create table if not exists %s (error_code int not null, description varchar(255), incident_time timestamp default current_timestamp)"
const qInsertNewEvent = "insert into %s values (%d, %s, current_timestamp)"
const qCheckErrorTypeExists = "select count(*) from errors where project_name='%s' and error_code='%d'"
const qAddErrorTypeToErrors = "insert into errors values (%s, %d)"

var db tables.ConnPool

// InitializeDb creates the db conn and creates the necessary tables
// if they are not yet created
func InitializeDb() {
	log.Println("Setting up the database")
	db = tables.CreateDb()
	err := createTable(db, "errorsTable")
	if err != nil {
		log.Fatal("Failed to create errors table in InitializeDb")
	}
}

func createTable(db tables.ConnPool, queryType string) (err error) {
	var queryToExecute string
	switch queryType {
	case "errorsTable":
		queryToExecute = qCreateErrorsTable
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
	name, errMsg := data.name, data.errMsg
	code := data.code
	existErr := checkTableExist(name)
	if existErr != nil {
		err = existErr
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

func checkTableExist(name string) (err error) {
	checkQuery := fmt.Sprintf(qCreateIndProjectsTable, name)
	_, err = db.Db.Exec(checkQuery)
	if err != nil {
		err = errors.Wrapf(
			err,
			"Something went wrong when checking the existence of table %s",
			name,
		)
		return err
	}
	return nil
}

func checkErrorTypeExist(name string, code int) (err error) {
	checkErrorTypeExistQuery := fmt.Sprintf(qCheckErrorTypeExists, name, code)
	rows, err = db.Db.Exec(checkErrorTypeExistQuery)
	if err != nil {
		err = errors.Wrapf(
			err,
			"Something went wrong when checking the errors table"
		)
		return err
	}
	defer rows.Close()

	return nil
}
