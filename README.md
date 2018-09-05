# Documentation Practice

### Objective
- Practicing writing documentation
- Practicing mongoose
- Practicing mongoDB

### Installing

Follow these instruction before you start this app

```
$ npm install
```

## Running the tests

to start the app, you need to type this on your terminal
```
$ npm run dev
```
## API

### User - Insert user data

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
| `/user`     |  POST  | Insert user data       |firstName, lastName, username, password, email | None        | 200              | 500            |
#### Success Response
`/user` and `POST`
```
{
    "message": "inserting data user success",
    "userData": {
        "balance": 0,
        "_id": "5b8edc28aa50911954956928",
        "firstName": "Gusti",
        "lastName": "Andryean",
        "password": "$2b$07$bKA0QE3CKm/8w71v2zH/luvz476DmlZt1iIjfWZMGlI93heRoPo76",
        "email": "andryean@mail.com",
        "createdAt": "2018-09-04T19:25:28.153Z",
        "updatedAt": "2018-09-04T19:25:28.153Z",
        "__v": 0
    }
}
```
---

 ### User - Display all users data

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
| `/user`     |  GET   | Display all users data |None | None        | 200              | 500            |
#### Success Response
`/user` and `GET`
```
{
    "usersData": [
        {
            "balance": 0,
            "_id": "5b8edc28aa50911954956928",
            "firstName": "Gusti",
            "lastName": "Andryean",
            "password": "$2b$07$bKA0QE3CKm/8w71v2zH/luvz476DmlZt1iIjfWZMGlI93heRoPo76",
            "email": "andryean@mail.com",
            "createdAt": "2018-09-04T19:25:28.153Z",
            "updatedAt": "2018-09-04T19:25:28.153Z",
            "__v": 0
        },
        {
            "balance": 0,
            "_id": "5b8ee8f7092a202015474b46",
            "firstName": "Asrul",
            "lastName": "Hidayat",
            "password": "$2b$07$mTfCzbZQpvdaXy2UDNhBCukkMgz5JCinKQmIJcOcEWfcst8Vj8C5S",
            "email": "talkAsrul@mail.com",
            "createdAt": "2018-09-04T20:20:07.164Z",
            "updatedAt": "2018-09-04T20:20:07.164Z",
            "__v": 0
        }
    ]
}
```
---

 ### User - Update users data

| URL         | Method | Description            |Data Body / Requirement                    | Data Params | Success Response | Error Response |
| ----------- |:------:|:---------------------: |:-----------------------------------------:|:-----------:|:----------------:|:--------------:|
| `/user/:id` |  PUT   | Update users data      | firstName, lastName, username, password, email (Min field : 1)| Id        | 200              | 500            |
#### Success Response
`/user/:id` and `PUT`
```
{
    "message": "updating success",
    "user": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```
## Built With

* [express](https://www.npmjs.com/package/express) - The web framework used
* [mongodb](https://www.npmjs.com/package/mongodb) - Database
* [mongoose](https://www.npmjs.com/package/mongoose) - ODM
* [nodemon](https://www.npmjs.com/package/nodemon) - Utility that will monitor for any changes in source and automatically restart server
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Utility that will encoded important user data
* [dotenv](https://www.npmjs.com/package/dotenv) - Utitily for loads environent variable

## Authors

* **Gusti Andryean B** - *Hacktive8 - Student* - [gandryeanb](https://github.com/Gandryeanb)

## Acknowledgments

* Inspiration
* etc

