# URL Shortener
This is a static url shortener using fake data.

## Installation

Install all Dependencies
```
npm install or npm i
```

## Start the Server

To start the server with default settings run
```
npm start
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
