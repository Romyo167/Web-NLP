var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
var AYLIENTextAPI = require("aylien_textapi")
let textapi = new AYLIENTextAPI({ application_id: process.env.API_ID, application_key: process.env.API_KEY});
console.log(textapi);

const cors = require('cors');
const app = express()
app.use(express.static('dist'))
app.use(cors());

app.get('/', function (req, res) {
    // res.sendFile('index.html',{root:'/Embedded_Systems_IOT/Front end web/course 4/evaluate-news-nlp'});
    res.sendFile(path.resolve('dist/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/api', function (req, res) {

let obj = [];

textapi.sentiment({

text: req.query.input,

mode: 'Document' },

function(error, response) {
if(response === null)
  console.log("error",error);
else
res.send(response);

});

})
