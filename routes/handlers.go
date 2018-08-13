package routes

import (
	"log"
	"net/http"
)

// HomeHandler handles '\'
func HomeHandler(writer http.ResponseWriter, req *http.Request) {
	log.Println("'/' received request")
	writer.WriteHeader(http.StatusOK)
	writer.Write([]byte("200 - Success"))
	log.Println("Res 200")
}
