const e = require("express");
const { createRequest, createResponse } = require("node-mocks-http");
const {login, getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario} = require('../src/controllers/usuario.controller.js');
  const { OutPutMessage } = require("../src/util/OutPutMessage.js");
  
  jest.mock("../src/controllers/usuario.controller.js");