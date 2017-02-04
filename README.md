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
| POST | /api/v1/url | [{ "origUrl": "http://www.google.com" }, { "shortUrl": "http://sho.rt/kReiLTTJ" }]|
