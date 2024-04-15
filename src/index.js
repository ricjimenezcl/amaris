const express = require("express");
const mongoose = require("mongoose");
const Usuario = require("../src/models/usuario.model.js");
const UsuarioRoute = require("../src/routes/usuario.routes.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/usuario", UsuarioRoute);

  /*app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });*/

  mongoose
  .connect(
    "mongodb+srv://ricjimenezcl:FCDYYsqFXhOfj7PR@backendbd.x26z6cp.mongodb.net/?retryWrites=true&w=majority&appName=BackendBD"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });