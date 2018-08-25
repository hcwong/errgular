package routes

import (
	"encoding/json"
	"log"
	"net/http"
)

// ErrgularReq - JSON structure of the POST request body from the application
type ErrgularReq struct {
	Name   string
	Code   int
	ErrMsg string
}

// HomeHandler handles '\'
func HomeHandler(writer http.ResponseWriter, req *http.Request) {
	log.Println("'/' received request")
	writer.WriteHeader(http.StatusOK)
	writer.Write([]byte("200 - Success. WIP: Insert a home page"))
	log.Println("Res 200")
}

// AddEvent logs the error event sent by the app into db. WIP
func AddEvent(writer http.ResponseWriter, req *http.Request) {
	var r ErrgularReq
	decoder := json.NewDecoder(req.Body)
	decodeErr := decoder.Decode(&r)
	if decodeErr != nil {
		writer.WriteHeader(http.StatusBadRequest)
		writer.Write([]byte("400 Bad Request"))
		log.Println(decodeErr)
		log.Println("Failed to add the new event into the database")
	}
	err := AddNewEvent(&r, Database)
	if err != nil {
		writer.WriteHeader(http.StatusInternalServerError)
		writer.Write([]byte("501 Internal Server Error"))
		log.Println(err)
		log.Println("Failed to add the new event into the database")
	}
	writer.WriteHeader(http.StatusOK)
}
