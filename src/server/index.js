const dotenv = require('dotenv');
dotenv.config();
const api_key = process.env.API_KEY;

const path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require ('body-parser');
const cors = require('cors')

let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// Setup Server
const port = 8081;
// Spin up the server
const server = app.listen(port, () => console.log(`Running on localhost: ${port}`));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// POST route
app.post('/inputfield', async (req, res) => {
    const response  = await fetch("https://api.meaningcloud.com/sentiment-2.1" + apiKey + "&lang=en",{
    method: 'POST'   
    ,})
    try{
        const data = res.json();
        console.log(data)
        return data;
      }  catch(error) {
        console.log("error", error);
        // handle the error
    }
    });