package routes

import (
	"encoding/json"
	"fmt"
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

// AddEvent logs the error event sent by the app into db.
func AddEvent(writer http.ResponseWriter, req *http.Request) {
	var r ErrgularReq
	decoder := json.NewDecoder(req.Body)
	decodeErr := decoder.Decode(&r)
	if decodeErr != nil {
		writer.WriteHeader(http.StatusBadRequest)
		writer.Write([]byte("400 Bad Request"))
		log.Println(decodeErr)
		log.Println("Request Body must be incorrect")
	}
	err := AddNewEvent(&r, Database)
	if err != nil {
		writer.WriteHeader(http.StatusInternalServerError)
		writer.Write([]byte("500 Internal Server Error"))
		log.Println(err)
		log.Println("Failed to add the new event into the database")
	}
	writer.WriteHeader(http.StatusOK)
}

// ChooseProj is a to choose the project
func ChooseProj(writer http.ResponseWriter, req *http.Request) {
	projName, ok := req.URL.Query()["projName"]
	if !ok {
		writer.WriteHeader(http.StatusBadRequest)
		writer.Write([]byte("400 Bad Request"))
		log.Println("Request Body must be incorrect")
	}
	// Grab the project details from the database
	responseData := GetAllErrorInstances(projName[0], Database)
	jsonResponse, _ := json.Marshal(responseData)
	fmt.Println(string(jsonResponse))
	writer.Header().Set("Content-Type", "application/json")
	writer.Write(jsonResponse)
}
