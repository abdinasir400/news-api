const express = require('express');
const app = express();
const {displayTopics} = require('./controllers/topics.controller.js')

app.use(express.json());

app.get('/api/topics',displayTopics)

app.use((req,res,next) => {
    res.status(404).send({msg: 'path not found'})
})

module.exports= {app}


