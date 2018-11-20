package helpers

import (
	"fmt"

	"github.com/pkg/errors"
)

func isErrorReturned(err error, msg string) error {
	if err != nil {
		fmt.Println(err)
		wrappedError := errors.Wrapf(err, msg)
		return wrappedError
	}
	return nil
}
