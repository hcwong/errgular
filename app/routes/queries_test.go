package routes

import (
	"fmt"
	"testing"

	"github.com/hcwong/errgular/test/helpers"
	"github.com/stretchr/testify/assert"
)

func TestCreateTable(t *testing.T) {
	assert := assert.New(t)

	testCases := []string{"errors", "dummy_proj"}

	for _, testCase := range testCases {
		t.Run(testCase, func(t *testing.T) {
			db := testhelpers.CreateTestDatabase(t)
			defer testhelpers.CloseTestDatabase(t, db.Db)
			createTableErr := createTable(testCase, db)
			if createTableErr != nil {
				t.Log(createTableErr)
				t.Fatal(fmt.Sprintf("Create Table test failed for subtest %s", testCase))
			}
			checkTableCreatedQuery := "select exists (select 1 from information_schema.tables where table_name=$1)"
			var isCreated bool
			checkCreateErr := db.Db.QueryRow(checkTableCreatedQuery, testCase).
				Scan(&isCreated)
			if checkCreateErr != nil {
				t.Log(createTableErr)
				t.Fatal(fmt.Sprintf("Create Table test failed for subtest %s", testCase))
			}
			assert.True(isCreated)
		})
	}
}

// func TestCheckErrorTypeExist(t *testing.T) {
// 	assert := assert.New(t)

// 	db := testhelpers.CreateTestDatabase(t)
// 	defer testhelpers.CloseTestDatabase(t, db.Db)
// 	// Assume that connection works
// 	_ = createTable("errors", db)
// 	// Seed the tables with the necessary information

// }
