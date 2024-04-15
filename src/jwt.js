const jwt = require("jsonwebtoken")

const getToken = async (req, res) => {
    try {
      const token = process.env.TOKEN
      res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ message: "no encuentra token!!" });
    }
  };

  module.exports = {
    getToken
  };