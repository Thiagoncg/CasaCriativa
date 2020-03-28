const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./casacriativa.db');

db.serialize(function() {
    //Create table
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    //inserir dados
    // const query = `
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES(?,?,?,?,?);
    // `
    // const values =  [
    //     "https://image.flaticon.com/icons/svg/2728/2728994.svg",
    //     "Cuidar de Bebes",
    //     "Paternidade",
    //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis sapiente",
    //     "https://www.criargames.com.br"
    // ]
    // db.run(query, values, function(err){
    //     if(err) return console.log(err)

    //     console.log(this);            
    // })
    //end Inserir dados

    //deletar dados
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    //     if(err) return console.log(err);

    //     console.log( "dados deletados", this);       
        
    // })
    //end deletar dados

    //consultar dados
    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if(err) return console.log(err);
        
    //     console.log(rows);
        
    // })
    //end consultar dados

    module.exports = db;
})