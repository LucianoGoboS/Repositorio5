const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./src/views'));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/src/views/index.html")
});

app.get("/aluno",(req,res)=>{
    res.sendFile(__dirname + "/src/views/aluno.html")
});

app.get("/duvida",(req,res)=>{
    res.sendFile(__dirname + "/src/views/duvida.html")
});

app.get("/eu",(req,res)=>{
    res.sendFile(__dirname + "/src/views/eu.html")
});

app.post("/confirmacao",(req,res)=>{
    res.send("Obrigado "+req.body.fname+" por ter enviado a mensagem "+req.body.Assunto+" Retornaremos no email "+
    req.body.lname);
 });

app.listen(3000, ()=>{
    console.log("o servidor esta rodando.");
});

