# Coffee project

 [Back to home](../../README.md)

`***1.0.0***`

The first version of coffee project contains all the necessary endpoints to create and remove users, update their information and read all the users and their current information existing in the coffee project data base. The endpoints exposed are:

## Users [ /users ]

- Endpoints
    - **GET /** Returns a list of users with their information.
        
        ### Query
        
        | Name | Description |
        | --- | --- |
        | page | You can use from 1 to the number of available pages. The default value is 1. |
        | userPerPage | The number of users per page. You can use 1-20. If you use a value out of range, the service will return a list with the default number of users: 5. |
        
        ### Response
        
        ```json
        {
        	"data": {
        		"users": {
        			"_id": "string"
        			"name": "string"
        			"email": "string"
        			"role": "ROLE"
        		} []
        		"page": number
        		"usersQuantity": number
        	}
        }
        ```
        
    - **GET /data-user/[id]** Returns the information of user using his id.
        
        ### Param
        
        | Name | Description |
        | --- | --- |
        | id | The user’s id. It must be a mongodb valid id, and the id must belong to an active user. |
        
        ### Response
        
        ```json
        {
        	"data": {
        		"users": {
        			"_id": "string"
        			"name": "string"
        			"email": "string"
        			"role": "ROLE"
        		}
        	}
        }
        ```
        
        ### Errors
        
        | Type | Error |
        | --- | --- |
        | Existence errors | There is no user with that id. |
        | Existence errors | The id is not an mongodb valid id. |
    - **POST /register-user** Create user.
        
        ### Body
        
        The request body must contain an instance of `iUser`.
        
        ### Response
        
        ```json
        {
        	"data": {
        		"user": "iUser"
        	},
        	"message": "User saved successfully"
        }
        ```
        
        ### Errors
        
        | Type | Error |
        | --- | --- |
        | Validations errors | All errors |
        | Existance errors | Email already registered |
    - **PUT /update-data-user/[id]** Update submitted user information.
        
        ### Body
        
        The request body must contain an instance of `iUser` except `email`. In this version, We do not support this update.
        
        ### Param
        
        | Name | Description |
        | --- | --- |
        | id | The user’s id. It must be a mongodb valid id, and the id must belong to an active user. |
        
        ### Response
        
        ```json
        {
        	"data": {
        		"iUser"
        	}
        	"message": "User info updated successfully"
        }
        ```
        
        ### Errors
        
        | Type | Error |
        | --- | --- |
        | Denial errors | User email update attempt |
        | Existence errors | There is no user with that id. |
        | Existence errors | The id is not an mongodb valid id. |
    - **DELETE /delete-user/[id]** Delete user using id.
        
        ### Param
        
        | Name | Description |
        | --- | --- |
        | id | Valid iUser id |
        
        ### Response
        
        ```json
        {
        	"message": "${name} has been deleted."
        }
        ```
        
        ### Errors
        
        | Type | Error |
        | --- | --- |
        | Existence errors | There is no user with that id. |
        | Existence errors | The id is not an mongodb valid id. |

## MODELS

- **User**
    
    ```tsx
    interface iUsers {
    	_id: string
    	name: string
    	email: string
    	role: ROLE
    	password: string // This attribute doesn't return in responses.
    	profileImage?: string
    }
    ```
    
    | Name | Description |
    | --- | --- |
    | name* | Name of user. |
    | email* | Email of user. There can be no duplicate emails. |
    | password* | Password of user. The password must be at least 8 characters long. |
    | role* | Check the corresponding documentation. |
    | profileImage | The url associated with the profile picture. |
    
- **Errors**
    
    ```tsx
    interface iErrors {
    	value: string // the value of param that caused the error
    	msg: string // an informative message
    	param: string // the param that caused the error
    	location: string // It can be body, params, query, etc.
    } []
    ```
    

## ERRORS

- **Existence errors**
    
    
    | Error | Message |
    | --- | --- |
    | There is no user with that id. | There is no user with the id ${id} or possibly the user has unsubscribed. |
    | The id is not an mongodb valid id. | “It is not a valid mongoId” & "Cast to ObjectId failed for value \"${id}\" (type string) at path \"_id\" for model \"User\"” |
    | Email already registered | The email ${email} already exists. |
- **Validations errors**
    
    
    | Error | Message |
    | --- | --- |
    | Invalid email | The email is not valid. |
    | Invalid password | The password must be at least 8 characters long. |
    | No name | The username is required. |
    | Invalid role | The role ${role} no exist. |
- **Denial errors**
    
    
    | Error | Message |
    | --- | --- |
    | Invalid email | The email is not valid. |
    | User email update attempt | You can not update the email using this endpoint. Please, check the documentation. |