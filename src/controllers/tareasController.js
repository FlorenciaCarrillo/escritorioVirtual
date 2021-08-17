const express = require("express");
const controller = express.Router();
const path = require("path");
const db = require("../db/db");



controller.get("/api/tareas", async (req, res)=> {

    const tareas= await db("tarea");

    res.json(tareas); //le digo al controlador que devuelva las tareas



})

//para agregar una tarea hago post y en vez de devolver una vista devuelvo un json y un mensaje "Agregado correctamente"


controller.get("/api/tareas/:id", async (req, res)=> {

    const tarea= await db("tarea").where({
        idTarea: req.params.id
    });

    res.json(tarea); //le digo al controlador que devuelva las tareas



})









module.exports= controller;