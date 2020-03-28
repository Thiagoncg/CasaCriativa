// express criar servidor
const express = require("express");
const server = express();

const db = require("./db");

//configurar arquivos estaticos
server.use(express.static("public"));

//habilitar req.body
server.use(express.urlencoded({ extended: true }))

//configuração nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views",{
    express: server,
    noCache: true,

});


//rota
server.get("/", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) {
            console.log(err);
            return res.send("Erro no banco de dados")
            
        }
        const reverseIdeas = [...rows].reverse();

        let lastIdeas = []
        for (let idea of reverseIdeas) {
            if(lastIdeas.length < 2){
    
                lastIdeas.push(idea);
            }        
        }  
     
        return res.render("index.html", { ideas: lastIdeas })      
    })


    
});

//rota
server.get("/ideias", function(req, res){

    db.all(`SELECT *FROM ideas`, function(err, rows){
        if(err) {
            console.log(err);
            return res.send("Erro no banco de dados")
            
        }
        
        const reverseIdeas = [...rows].reverse();
    
        return res.render("ideias.html",{ ideas:  reverseIdeas})
        
    })


});

//rota add dados
server.post("/", function(req, res){
    console.log(req.body);
        const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?);
    `
    const values =  [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]
    db.run(query, values, function(err){
        if(err) {
            console.log(err);
            return res.send("Erro no banco de dados")
            
        }

        return res.redirect("/ideias")
        console.log(this);            
    })
    
})


//server ligado na porta 3000
server.listen(3000);
