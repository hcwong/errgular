package routes

import (
	"fmt"
	"testing"

	"github.com/hcwong/errgular/test/helpers"
)

func TestCreateTable(t *testing.T) {
	// assert := assert.New(t)

	testCases := []string{"errorsTable", "dummy_proj"}

	for _, testCase := range testCases {
		t.Run(testCase, func(t *testing.T) {
			db := testhelpers.CreateTestDatabase(t)
			defer testhelpers.CloseTestDatabase(t, db)
			createTableErr := createTable(testCase)
			if createTableErr != nil {
				t.Log(createTableErr)
				t.Fatal(fmt.Sprintf("Create Table test failed for subtest %s", testCase))
			}
			checkTableCreatedQuery := fmt.Sprintf("select exists (select 1 from information_schema.tables where table_schema='%s' and table_name='%s')", testhelpers.TestSchema, testCase)
			isCreated, isCreatedErr := db.Exec(checkTableCreatedQuery)
			if isCreatedErr != nil {
				t.Log(createTableErr)
				t.Fatal(fmt.Sprintf("Create Table test failed for subtest %s", testCase))
			}
			value, _ := isCreated.RowsAffected()
			t.Log(value)
			// assert.True(isCreated)
		})
	}
}
