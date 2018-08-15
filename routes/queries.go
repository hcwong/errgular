package routes

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	// Driver for postgres connection
	_ "github.com/lib/pq"
	"github.com/pkg/errors"
)

// ConnPool contains the db connection and the dbConfig struct
type ConnPool struct {
	db     *sql.DB
	config dbConfig
}

type dbConfig struct {
	host     string
	port     string
	user     string
	password string
	database string
}

// CreateDb opens a connection to the postgres db
func CreateDb() (pool ConnPool, err error) {
	config := initializeConfig()
	configErr := checkConfig(config)
	if configErr != nil {
		// TODO: Should probably write a custom error file to handle all
		log.Fatal("dbConfig not fully filled")
	}
	pool.config = config
	db, dbErr := sql.Open(
		"postgres",
		fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=disable",
			config.user, config.password, config.database, config.host, config.port),
	)
	if dbErr != nil {
		// TODO: Same as above
		log.Fatal("Could not open connection to postgres db")
	}
	// Ping db to verify that a connection can be made
	pingErr := ping(db)
	if pingErr != nil {
		// TODO: Same as above
		log.Fatal("Could not ping postgres db")
	}
	pool.db = db
	return
}

func (pool ConnPool) closeConn() (err error) {
	if err = pool.db.Close(); err != nil {
		err = errors.Wrapf(
			err,
			"Could not close connection to db (%s)",
		)
		return
	}
	return nil
}

func checkConfig(config dbConfig) (err error) {
	if config.host == "" || config.port == "" || config.user == "" ||
		config.password == "" || config.database == "" {
		err = errors.Errorf(
			"Please set all fields in dbConfig (%s)",
		)
		return
	}
	return nil
}

func initializeConfig() (config dbConfig) {
	config = dbConfig{
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_DATABASE"),
	}
	return
}

func ping(db *sql.DB) (err error) {
	if err = db.Ping(); err != nil {
		err = errors.Wrapf(err,
			"Could not ping postgres db (%s)",
		)
		return
	}
	return nil
}

// TODO: Function to create the table if it is not already created
func createTable() {

}
