package testhelpers

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"testing"

	// Driver for postgres connection
	_ "github.com/lib/pq"
)

var (
	testHost     = os.Getenv("DB_HOST_TEST")
	testPort     = os.Getenv("DB_PORT_TEST")
	testUser     = os.Getenv("DB_USER_TEST")
	testPassword = os.Getenv("DB_PASSWORD_TEST")
	testDatabase = os.Getenv("DB_DATABASE_TEST")
	testSchema   = os.Getenv("SCHEMA_NAME_TEST")
)

// Set up and tear down a test database for each test. All these should probably go into test helpers
func CreateTestDatabase(t *testing.T) *sql.DB {
	db, dbErr := sql.Open(
		"postgres",
		fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=disable",
			testUser, testPassword, testDatabase, testHost, testPort),
	)
	if dbErr != nil {
		log.Fatal("Error creating test database")
	}
	_, schemaErr := db.Exec(fmt.Sprintf("CREATE SCHEMA '%s'", testSchema))
	if schemaErr != nil {
		log.Println(schemaErr)
		log.Fatal("Error creating test schema")
	}
	LoadTestData(t, db)
	return db
}

// Seed the test database everytime it is setup
func LoadTestData(t *testing.T, db *sql.DB) {
	for _, query := range TestQueries {
		_, err := db.Exec(query)
		if err != nil {
			log.Println(err)
			log.Fatal("Something went wrong when seeding the database")
		}
	}
}

func CloseTestDatabase(t *testing.T, db *sql.DB) {
	const qDropTestSchema = "drop schema '%s'"
}
