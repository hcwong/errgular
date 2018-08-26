package routes

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	"github.com/stretchr/testify/assert"
)

func createTestRouter() *mux.Router {
	r := mux.NewRouter()
	for _, route := range RoutesList {
		r.HandleFunc(route.Path, route.Handler).
			Methods(route.Method)
	}
	return r
}

func TestHomeHandler(t *testing.T) {
	req, _ := http.NewRequest("GET", "/", nil)
	res := httptest.NewRecorder()
	createTestRouter().ServeHTTP(res, req)
	assert.Equal(t, 200, res.Code)
}

func TestAddEvent(t *testing.T) {
	// t.Run("Internal Server Error because no table", func(t *testing.T) {
	// 	data := &ErrgularReq{"proj1", 1, "test"}
	// 	reqBody, _ := json.Marshal(data)
	// 	req, _ := http.NewRequest("POST", "/new_event", bytes.NewBuffer(reqBody))
	// 	res := httptest.NewRecorder()
	// 	createTestRouter().ServeHTTP(res, req)
	// 	assert.Equal(t, 501, res.Code)
	// })
	// t.Run("Successful", func(t *testing.T) {
	// 	Database := testhelpers.CreateTestDatabase(t)
	// 	defer testhelpers.CloseTestDatabase(t, Database.Db)
	// 	CreateTable("errors", Database)
	// 	data := &ErrgularReq{"proj1", 1, "test"}
	// 	reqBody, _ := json.Marshal(data)
	// 	req, _ := http.NewRequest("POST", "/new_event", bytes.NewBuffer(reqBody))
	// 	res := httptest.NewRecorder()
	// 	createTestRouter().ServeHTTP(res, req)
	// 	assert.Equal(t, 200, res.Code)
	// })
}
