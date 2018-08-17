package routes

import (
	"encoding/json"
	"log"
	"net/http"
)

// ErrgularReq - JSON structure of the POST request body from the application
type ErrgularReq struct {
	name   string
	code   int
	errMsg string
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
	log.Println("Error event added. This is still WIP")
	decoder := json.NewDecoder(req.Body)
	decodeErr := decoder.Decode(&r)
	if decodeErr != nil {
		panic(decodeErr) // Maybe want to return the appropriate err code also
	}
	err := AddNewEvent(&r)
	if err != nil {
		log.Fatal("Failed to add the new event into the database")
	}
	writer.WriteHeader(http.StatusOK)
}
