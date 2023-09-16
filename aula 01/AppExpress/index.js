//Primeiro projeto express

//Importano e iniciando o express
const express = require("express");
const app = express();

//direcionamento para o express usar o EJS como View engine
app.set("view engine", "ejs");

//Criação rota home
/*app.get('/',(req, res) => {/function(reg,res){
    res.send("Bem vindo ao meu Currículo")
});*/

//Criação rota home
app.get("/:nome/:lang", (req,res) => {
    var nome = req.params.nome;//Criando variavel nome
    var lang = req.params.lang;//Criando variável lang
    res.render("index",{ //Desenhou o index.ejs, parâmetros
        nome: nome, //dados utilizado no HTML
        lang: lang, //dados utilizado no HTML
        empresa: "EFG"
    });
});


app.get("/contato", function(reg,res){
    res.send("<h1>Bem vindo ao meu contato</h1><br><h2>este e o meu contato:</h2><br><h3>(61) 98455-2264</h3>")
});

app.get("/portifolio", function(reg,res){
    res.send("Bem vindo ao meu portifólio")
});

app.get("/biografia",function(reg,res){
      res.send("Bem vindo a minha biografia")
});

//Iniciando servidor na porta
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});