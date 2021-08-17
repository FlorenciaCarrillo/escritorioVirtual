const express = require("express");
const controller = express.Router();
const path = require("path");

controller.use("/",express.static(path.join(__dirname,"../public")));









module.exports= controller;