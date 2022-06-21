const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const PORT = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) =>{
    res.json({info: 'test'})
})

app.listen(PORT, () =>{
    console.log(`Test app ${PORT}/`)
})