
const {
    getUsers,
} = require("../Models/users.models");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).send({ users});
  } catch (err){
    next (err)
  }
  };
