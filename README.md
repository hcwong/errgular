# Introduction
A simple toy project. Learning Go and React

## Installation
Prerequisites: Golang and Postgres, ngrok or some other tunneling software for local dev
1. Clone the Project and setup your local db
2. Go to project root and run `go install` followed by `$GOPATH/bin/errgular`. Of course this assumes that the `$GOPATH` is set and this is cloned into your Go Workspace
3. `yarn run dev to start the server`

## TODO
* Read into using prepared statements
* Create custom errors to throw and improve error handling. Panic vs log.fatal?