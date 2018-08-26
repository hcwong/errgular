package routes

import (
	"fmt"
	"testing"

	"github.com/hcwong/errgular/app/tables"
	"github.com/hcwong/errgular/test/helpers"
	"github.com/stretchr/testify/assert"
)

type row struct {
	Project_name string
	Error_code   int
}

type projRow struct {
	Error_code  int
	Description string
}

func createTableTest(t *testing.T, tableName string, db tables.ConnPool) {
	createTableErr := CreateTable(tableName, db)
	if createTableErr != nil {
		t.Log(createTableErr)
		t.Fatal(fmt.Sprintf("Failed to create table %s", tableName))
	}
}
func TestCreateTable(t *testing.T) {
	assert := assert.New(t)

	testCases := []string{"errors", "dummy_proj"}

	for _, testCase := range testCases {
		t.Run(testCase, func(t *testing.T) {
			db := testhelpers.CreateTestDatabase(t)
			defer testhelpers.CloseTestDatabase(t, db.Db)
			createTableTest(t, testCase, db)
			checkTableCreatedQuery := "select exists (select 1 from information_schema.tables where table_name=$1)"
			var isCreated bool
			checkCreateErr := db.Db.QueryRowx(checkTableCreatedQuery, testCase).
				Scan(&isCreated)
			if checkCreateErr != nil {
				t.Log(checkCreateErr)
				t.Fatal(fmt.Sprintf("Create Table test failed for subtest %s", testCase))
			}
			assert.True(isCreated)
		})
	}
}

func TestCheckErrorTypeExist(t *testing.T) {
	assert := assert.New(t)

	t.Run("Error Exists and is found", func(t *testing.T) {
		db := testhelpers.CreateTestDatabase(t)
		defer testhelpers.CloseTestDatabase(t, db.Db)
		createTableTest(t, "errors", db)
		testhelpers.LoadTestData(t, db, testhelpers.QCheckErrorTypeExist)
		_ = checkErrorTypeExist("proj1", 1, db)
		var results []row
		err := db.Db.Select(&results, "select project_name, error_code from errors where project_name='proj1' and error_code=1")
		if err != nil {
			t.Log(err)
			t.Fatal("Error while checking the errors table")
		}
		assert.Equal(results[0].Project_name, "proj1")
		assert.Equal(results[0].Error_code, 1)
		assert.Equal(len(results), 1)
	})
}

func TestAddNewErrortoErrors(t *testing.T) {
	assert := assert.New(t)

	t.Run("Insert Error (successfully)", func(t *testing.T) {
		db := testhelpers.CreateTestDatabase(t)
		defer testhelpers.CloseTestDatabase(t, db.Db)
		createTableTest(t, "errors", db)
		_ = addNewErrortoErrors(db, "proj1", 1)
		var results []row
		err := db.Db.Select(&results, "select project_name, error_code from errors where project_name='proj1' and error_code=1")
		if err != nil {
			t.Log(err)
			t.Fatal("Error while checking the errors table")
		}
		assert.Equal(results[0].Project_name, "proj1")
		assert.Equal(results[0].Error_code, 1)
		assert.Equal(len(results), 1)
	})
}

func TestCheckRowsCount(t *testing.T) {
	assert := assert.New(t)

	db := testhelpers.CreateTestDatabase(t)
	defer testhelpers.CloseTestDatabase(t, db.Db)
	createTableTest(t, "errors", db)
	testhelpers.LoadTestData(t, db, testhelpers.QCheckRowsCount)

	t.Run("Return 2 when count is 2", func(t *testing.T) {
		rows, _ := db.Db.Queryx("select project_name, error_code from errors where project_name='proj1'")
		count := checkRowsCount(rows)
		assert.Equal(count, 2)
	})

	t.Run("Return 0 when count is 0", func(t *testing.T) {
		rows, _ := db.Db.Queryx("select project_name, error_code from errors where project_name='proj2'")
		count := checkRowsCount(rows)
		assert.Equal(count, 0)
	})
}

func TestAddNewEvent(t *testing.T) {
	assert := assert.New(t)

	t.Run("Insert a new error into the errors table and create new table", func(t *testing.T) {
		data := ErrgularReq{"proj1", 1, "dummy msg"}
		db := testhelpers.CreateTestDatabase(t)
		defer testhelpers.CloseTestDatabase(t, db.Db)
		createTableTest(t, "errors", db)
		AddNewEvent(&data, db)
		var projTableResults []projRow
		errorRows, _ := db.Db.Queryx("select project_name, error_code from errors where project_name='proj1' and error_code=1")
		count := checkRowsCount(errorRows)
		err := db.Db.Select(&projTableResults, "select error_code, description from proj1")
		if err != nil {
			t.Log(err)
			t.Fatal("Error while cheecking the project's table")
		}

		assert.Equal(count, 1)
		assert.Equal(len(projTableResults), 1)
		assert.Equal(projTableResults[0].Error_code, 1)
		assert.Equal(projTableResults[0].Description, "dummy msg")
	})
}
