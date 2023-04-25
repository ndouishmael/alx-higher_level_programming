#!/usr/bin/node
// Script that prints all characters of a Star Wars movie
let request = require('request');
let url = 'https://swapi.co/api/films/' + process.argv[2];
request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    let films = JSON.parse(body);
    for (let character of films.characters) {
      request.get(character, function (err, response, body) {
        let films = JSON.parse(body);
        if (err) {
          console.log(err);
        } else if (response.statusCode === 200) {
          console.log(films.name);
        }
      });
    }
  }
});
