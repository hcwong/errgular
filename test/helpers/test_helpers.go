package testhelpers

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"testing"

	// Driver for postgres connection
	"github.com/hcwong/errgular/app/tables"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var TestHost, TestPort, TestUser, TestPassword, TestDatabase, TestSchema string

// CreateTestDatabase setups a test db
func CreateTestDatabase(t *testing.T) tables.ConnPool {
	LoadTestEnvVars()

	db, dbErr := sql.Open(
		"postgres",
		fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=disable",
			TestUser, TestPassword, TestDatabase, TestHost, TestPort),
	)
	if dbErr != nil {
		log.Fatal("Error creating test database")
	}
	_, schemaErr := db.Exec(
		fmt.Sprintf("create schema if not exists %s", TestSchema),
	)
	if schemaErr != nil {
		log.Println(schemaErr)
		log.Fatal("Error creating test schema")
	}
	database := tables.ConnPool{db}
	return database
}

// LoadTestData seeds the test database
func LoadTestData(t *testing.T, db *sql.DB, queries []string) {
	for _, query := range queries {
		_, err := db.Exec(query)
		if err != nil {
			log.Println(err)
			log.Fatal("Something went wrong when seeding the database")
		}
	}
}

// CloseTestDatabase removes the schema and closes db connection
func CloseTestDatabase(t *testing.T, db *sql.DB) {
	const qDropTestSchema = "drop schema %s cascade"
	_, err := db.Exec(fmt.Sprintf(qDropTestSchema, TestSchema))
	if err != nil {
		log.Println(err)
		log.Fatal("Could not close test database")
	}
}

func LoadTestEnvVars() {
	err := godotenv.Load("./../../.env")

	TestHost = os.Getenv("DB_HOST_TEST")
	TestPort = os.Getenv("DB_PORT_TEST")
	TestUser = os.Getenv("DB_USER_TEST")
	TestPassword = os.Getenv("DB_PASSWORD_TEST")
	TestDatabase = os.Getenv("DB_DATABASE_TEST")
	TestSchema = os.Getenv("SCHEMA_NAME_TEST")

	if err != nil {
		log.Println(err)
		log.Fatal("Error loading env variables")
	}
}
