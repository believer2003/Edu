const express = require('express');
const route = express.Router();
const { create, getUserByUsername, getAll, login, createTest } = require("../controller/userController.js");

route.use(express.json());
route.post("/create", create);
route.get("/user/:username", getUserByUsername);
route.get("/getAll", getAll);
route.post("/login", login);
route.post("/createTest", createTest);

module.exports = route;
