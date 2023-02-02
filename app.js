require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');

//handleBars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenino statico
app.use(express.static('public'));


app.get("/",  (req, res) =>{
    res.render('home',{
        titulo:'Curso Node JS',
        nombre:'Cristhian gomez'
    });
  });

app.get("/generic",  (req, res) =>{
  res.render('generic',{
    titulo:'Curso Node JS',
    nombre:'Cristhian gomez'
});
});

app.get("/elements",  (req, res) =>{
    res.render('elements',{
        titulo:'Curso Node JS',
        nombre:'Cristhian gomez'
    });
  });

app.get("*",  (req, res) =>{
  res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

