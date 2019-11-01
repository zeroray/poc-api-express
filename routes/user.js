
const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();

api.get('/user/', UserController.index);
api.post("/user/add", UserController.addUser);

module.exports = api;
