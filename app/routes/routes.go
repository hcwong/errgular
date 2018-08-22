package routes

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// StartServer starts the server
func StartServer() {
	log.Println("Starting the mux server on port 5000...")
	r := mux.NewRouter()
	for _, route := range routesList {
		r.HandleFunc(route.path, route.handler).
			Methods(route.method)
	}
	http.ListenAndServe(":5000", r)
}

type route struct {
	name    string
	path    string
	method  string
	handler http.HandlerFunc
}

type routes []route

var routesList = routes{
	route{
		"home",
		"/",
		"GET",
		HomeHandler,
	},
	route{
		"addEvent",
		"/new_event",
		"POST",
		AddEvent,
	},
}