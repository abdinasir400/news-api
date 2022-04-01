
const {
    getTopics,
} = require("../Models/topics.models");

exports.displayTopics = async (req, res, next) => {
  try {
    const topics = await getTopics();
    res.status(200).send({ topics});
  } catch (err){
    next (err)
  }
  };
