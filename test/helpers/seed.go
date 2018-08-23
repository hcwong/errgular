package testhelpers

var QCheckErrorTypeExist = []string{
	"insert into errors(project_name, error_code) values ('proj1', 1)",
}

var QCheckRowsCount = []string{
	"insert into errors(project_name, error_code) values ('proj1', 1), ('proj1', 2)",
}
