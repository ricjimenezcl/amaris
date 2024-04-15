const Usuario = require("../models/usuario.model");

const login = async (req, res) => {
    try {
        
        if (validaExisteEmail(req.body.email)) {
            console.log("El email ya registrado");
            res.status(400).json({ error: "El email no es válido" });
        }

        if (!validarEmail(req.body.email)) {
            console.log("El email no es válido.");
            res.status(400).json({ error: "El email no es válido" });
        }

        
        if (!validaPassword(req.body.password)) {
            console.log("El password no es válido.");
            res.status(400).json({ error: "El password no es válido" });
        }
        
        const user = await Usuario.findOne({ email: req.body.email });
        console.log(" entra al Login");
        if (user) {
          
          const result = req.body.password === user.password;
          if (result) {
           
           res.status(200).json({ message: "Login ok" });
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
};

const getUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.find({});
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
const getUsuario = async (req, res) => {
  try {
    const id = req.body.id;
    const usuario = await Usuario.findById(id);
    res.status(200).json(usuario);
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUsuario = async (req, res) => {
    
    if (!validarEmail(req.body.email)) {
        console.log("El email no es válido.");
        res.status(400).json({ error: "El email no es válido" });
    }

    
    if (!validaPassword(req.body.password)) {
        console.log("El email no es válido.");
        res.status(400).json({ error: "El password no es válido" });
    }

    if (!validaFono(req.body.phone)) {
        console.log("El email no es válido.");
        res.status(400).json({ error: "El fono no es válido" });
    }
  try {
    const usuario = await Usuario.create(req.body);
    res.status(200).json(usuario);
    console.log("Nombre : "+req.body.name);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUsuario = async (req, res) => {
  try {
    console.log("Pasa update");
    console.log("Nombre : "+req.body.id);
    const id = req.body.id;

    const usuario = await Usuario.findByIdAndUpdate(id, req.body);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    const updatedUsuario = await Usuario.findById(id);
    res.status(200).json(updatedUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    console.log("Pasa delete");
    console.log("id : "+req.body.id);
    const id = req.body.id;

    const usuario = await Usuario.findByIdAndDelete(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    res.status(200).json({ message: "Usuario deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


function validaPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d)[A-Za-z\d]{5,}$/;
    return regex.test(password);
}

function validaFono(fono) {
    const regex = /^\d{1,13}$/;
    return regex.test(fono);
}


async function  validaExisteEmail(email) {
    const user = await Usuario.findOne({ email: req.body.email });
    if(user){
        return true;
    }
}

module.exports = {
  login,
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};