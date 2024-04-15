const express = require("express");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario.model.js");
const router = express.Router();
const {login, getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuario.controller.js');
const { getToken } = require("../jwt.js")


router.get('/token',getToken)

router.get('/login', login);

router.get('/usuarios', getUsuarios);
 
router.get("/", getUsuario);

router.post("/", createUsuario);

// update a Usuario
router.put("/", updateUsuario);

// delete a Usuario
router.delete("/", deleteUsuario);




module.exports = router;