const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ingrese name!!"],
    },

    email: {
      type: String,
      required: [true, "Ingrese email!!"],
    },

    password: {
      type: String,
      required: [true, "Ingrese password!!"],
    },

    birthday: {
      type: String,
      required: [true, "Ingrese fecha de nacimiento!!"],
    },

    phone: {
      type: String,
      required: [true, "Ingrese numero telefonico!!"],
    },

    profile: {
      type: String,
      required: [true, "Ingrese perfil!!"],
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
