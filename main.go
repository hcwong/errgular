package main

import (
	"log"

	"github.com/hcwong/errgular/app/routes"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading env variables")
	}
	routes.InitializeDb()
	routes.StartServer()
}
