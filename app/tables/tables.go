package tables

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
	Db *sql.DB
}

// DbConfig contains the configuration for the database
type dbConfig struct {
	host     string
	port     string
	user     string
	password string
	database string
}

// CreateDb opens a connection to the postgres db
func CreateDb() (pool ConnPool) {
	config := initializeConfig()
	configErr := checkConfig(config)
	if configErr != nil {
		// TODO: Should probably write a custom error file to handle all
		log.Println(configErr)
		log.Fatal("dbConfig not fully filled")
	}
	db, dbErr := sql.Open(
		"postgres",
		fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=disable",
			config.user, config.password, config.database, config.host, config.port),
	)
	// TOCONSIDER: may want to abstract out all these err checks. Function a bit long
	if dbErr != nil {
		// TODO: Same as above
		log.Println(dbErr)
		log.Fatal("Could not open connection to postgres db")
	}
	// Ping db to verify that a connection can be made
	pingErr := ping(db)
	if pingErr != nil {
		// TODO: Same as above
		log.Println(pingErr)
		log.Fatal("Could not ping postgres db")
	}
	pool.Db = db
	return pool
}

func (pool ConnPool) closeConn() (err error) {
	if err = pool.Db.Close(); err != nil {
		err = errors.Wrapf(
			err,
			"Could not close connection to db",
		)
		return err
	}
	return nil
}

func checkConfig(config dbConfig) (err error) {
	if config.host == "" || config.port == "" || config.user == "" ||
		config.password == "" || config.database == "" {
		err = errors.Errorf(
			"Please set all fields in dbConfig",
		)
		return err
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
		err = errors.Wrapf(
			err,
			"Could not ping postgres db",
		)
		return err
	}
	return nil
}
