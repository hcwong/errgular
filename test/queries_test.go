package routes

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"testing"

	// "github.com/stretchr/testify/assert"
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

func TestCreateTable(t *testing.T) {
	db, dbErr := sql.Open(
		"postgres",
		fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=disable",
			testUser, testPassword, testDatabase, testHost, testPort),
	)
	if dbErr != nil {
		log.Fatal("Error creating test database")
	}
}

func CreateTestDatabase(t *testing.T) {

}

func CreateTestDatabaseConfig(t *testing.T) {

}
