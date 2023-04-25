#!/usr/bin/node

'use strict';

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
if (error) {
console.error(error);
return;
}

if (response.statusCode !== 200) {
console.error('Invalid status code:', response.statusCode);
return;
}

const todos = JSON.parse(body);

const users = {};

for (const todo of todos) {
if (todo.completed) {
const userId = todo.userId;
users[userId] = (users[userId] || 0) + 1;
}
}

for (const userId in users) {
console.log(${userId}: ${users[userId]} tasks completed);
}
});
