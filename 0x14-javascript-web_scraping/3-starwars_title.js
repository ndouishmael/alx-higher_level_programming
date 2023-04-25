#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

request(https://swapi-api.alx-tools.com/api/films/${movieId}, function (error, response, body) {
if (!error && response.statusCode === 200) {
const movie = JSON.parse(body);
console.log(movie.title);
} else {
console.log(Error: ${response.statusCode});
}
});
