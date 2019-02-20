package routes

import (
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

// StartServer starts the server
func StartServer() {
	log.Println("Starting the mux server on port 5000...")
	r := mux.NewRouter()
	// WIP: For dev purposes only
	origins := handlers.AllowedOrigins([]string{"*"})
	for _, route := range RoutesList {
		r.HandleFunc(route.Path, route.Handler).
			Methods(route.Method)
	}
	http.ListenAndServe(":5000", handlers.CORS(origins)(r))
}

type Route struct {
	Name    string
	Path    string
	Method  string
	Handler http.HandlerFunc
}

type Routes []Route

var RoutesList = Routes{
	Route{
		"home",
		"/",
		"GET",
		HomeHandler,
	},
	Route{
		"addEvent",
		"/new_event",
		"POST",
		AddEvent,
	},
	Route{
		"chooseProject",
		"/proj",
		"GET",
		ChooseProj,
	},
}
