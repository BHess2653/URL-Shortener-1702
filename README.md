# URL Shortener
This is a simple dynamic url shortener.

## Installation

Install all Dependencies
```
npm install or npm i
```

## env
create a .env file.
```
DB_NAME=databaseName
DB_HOST=databaseUser
DB_PORT=3306
DB_USER=root
DB_PASS=databasePass
DB_SCHEMA=mysql
```

## Start the Server

To start the server with default settings run
```
npm start
```

To start the server in DEBUG mode
```
DEBUG=true npm start
```
Output in DEBUG mode
```
=================================================
Server active on port 3000
Fri Feb 10 2017 02:24:53 GMT-0500 (EST)
=================================================
```

## Routes

| Method | URL | Response |
| --- | --- | --- |
| GET | /api/v1/ | { "Hello": "World" } |
| GET | /api/v1/status | { "Status": "true" } |
| POST | /api/v1/urls | [{ "id": 2, "origUrl": "http://www.google.com", "shortUrl": "kReiLTTJ", "createdAt": "2017-02-10T03:32:57.000Z", "updatedAt": "2017-02-10T03:32:57.000Z" }]|
| GET | /api/v1/urls | [{ "id": 1, "origUrl": "http://www.reddit.com", "shortUrl": "LgSdJMZj", "createdAt": "2017-02-10T03:32:57.000Z", "updatedAt": "2017-02-10T03:32:57.000Z" }] |
| GET | /api/v1/urls/:id | [{ "id": 2, "origUrl": "http://www.google.com", "shortUrl": "kReiLTTJ", "createdAt": "2017-02-10T03:32:57.000Z", "updatedAt": "2017-02-10T03:32:57.000Z" }] |
| POST | /api/v1/urls/:id | [{ "id": 2, "origUrl": "http://www.youtube.com", "shortUrl": "kReiLTTJ", "createdAt": "2017-02-10T03:32:57.000Z", "updatedAt": "2017-02-10T03:32:57.000Z" }] |
| DELETE | /api/v1/urls/:id | [{ 1 }] |
| GET | /go/:shortUrl | [{ "http://www.google.com" }] |
