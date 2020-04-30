const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.get('/', async (request, response) => {
    const data = await loadDataCollection()
    response.send(await data.find({}).toArray())
})

async function loadDataCollection() {
    const client = await mongodb.MongoClient.connect(
      'mongodb://ec2-3-23-77-153.us-east-2.compute.amazonaws.com:27017',
      {
        useNewUrlParser: true
      }
    );
  
    return client.db('Covid-19').collection('Colombia');
  }


module.exports = router