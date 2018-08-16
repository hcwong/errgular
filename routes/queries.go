package routes

import (
	"log"

	"github.com/hcwong/errgular/tables"

	"github.com/pkg/errors"
)

const qCreateErrorsTable = "create table if not exists errors (error_id integer primary key, project_name varchar(255) not null, error_code int not null)"

const qCreateIndProjectsTable = "create table if not exists %s (project_name varchar(255) )"
const qInsertNewEvent = ""

var db tables.ConnPool

// type query struct {
// 	name  string
// 	query string
// }

// var queries = []query{
// 	query{
// 		"createErrorsTable",
// 		qCreateErrorsTable,
// 	},
// }

// InitializeDb creates the db conn and creates the necessary tables
// if they are not yet created
func InitializeDb() {
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
func AddNewEvent(data ErrgularReq) {

}
