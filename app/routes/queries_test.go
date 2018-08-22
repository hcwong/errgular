package routes

import (
	"fmt"
	"testing"

	"github.com/hcwong/errgular/app/tables"
	"github.com/hcwong/errgular/test/helpers"
	"github.com/stretchr/testify/assert"
)

func createTableTest(t *testing.T, tableName string, db tables.ConnPool) {
	createTableErr := createTable(tableName, db)
	if createTableErr != nil {
		t.Log(createTableErr)
		t.Fatal(fmt.Sprintf("Create Table test failed for subtest %s", tableName))
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

	testCases := map[string]int{"proj1": 1, "proj2": 2}

	for tableName, errorCode := range testCases {
		t.Run("Check Error Exists", func(t *testing.T) {
			db := testhelpers.CreateTestDatabase(t)
			defer testhelpers.CloseTestDatabase(t, db.Db)
			createTableTest(t, "errors", db)
			testhelpers.LoadTestData(t, db, testhelpers.QCheckErrorTypeExist)
		})
	}
}
