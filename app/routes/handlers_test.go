package routes

import (
	"context"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"os/signal"
	"testing"
	"time"

	"github.com/gorilla/mux"
)

func startTestServer() *http.Server {
	r := mux.NewRouter()
	for _, route := range RoutesList {
		r.HandleFunc(route.Path, route.Handler).
			Methods(route.Method)
	}
	srv := &http.Server{
		Addr:    "127.0.0.1:5000",
		Handler: r,
	}
	return srv
}

func shutDownTestServer(s *http.Server) {
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()
	s.Shutdown(ctx)
}

func TestHomeHandler(t *testing.T) {
	req, _ := http.NewRequest("GET", "/", nil)
	res := httptest.NewRecorder()

	s := startTestServer()
	go func() {
		if err := s.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()

	defer shutDownTestServer(s)

	// WIP
	HomeHandler(res, req)

}
