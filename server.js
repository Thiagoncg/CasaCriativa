// express criar servidor
const express = require("express");
const server = express();

const ideas = [
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728994.svg",
        title:"Cuidar de Bebes",
        category:"Paternidade",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
        url:"https://www.criargames.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729017.svg",
        title:"Meio Ambiente",
        category:"Arvores",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
        url:"https://www.criargames.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728994.svg",
        title:"Cuidar de Bebes",
        category:"Paternidade",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
        url:"https://www.criargames.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728994.svg",
        title:"Cuidar de Bebes",
        category:"Paternidade",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
        url:"https://www.criargames.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728994.svg",
        title:"Cuidar de Bebes",
        category:"Paternidade",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
        url:"https://www.criargames.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728994.svg",
        title:"Cuidar de Bebes",
        category:"Paternidade",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
        url:"https://www.criargames.com.br"
    },
]

//configurar arquivos estaticos
server.use(express.static("public"));

//configuração nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views",{
    express: server,
    noCache: true,

});


//rota
server.get("/", function(req, res){

    const reverseIdeas = [...ideas].reverse();

    let lastIdeas = []
    for (let idea of reverseIdeas) {
        if(lastIdeas.length < 2){

            lastIdeas.push(idea);
        }        
    }  
 
    return res.render("index.html", { ideas: lastIdeas })
    
});


//rota
server.get("/ideias", function(req, res){

    const reverseIdeas = [...ideas].reverse();

    return res.render("ideias.html",{ ideas:  reverseIdeas})

});


//server ligado na porta 3000
server.listen(3000);
