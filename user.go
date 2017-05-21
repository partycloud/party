package party

import "fmt"

type User struct {
	ID   string
	Name string
}

func GetUserId(token string) (string, error) {
	type resultShape struct {
		User *User
	}
	var result resultShape
	err := gql(token, `{
    user {
      id
    }
  }`, &result)

	fmt.Println(result)

	if err != nil {
		return "", err
	}
	if result.User == nil {
		return "", nil
	}
	return result.User.ID, nil
}
