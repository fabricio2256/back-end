//HTTP na prática 

//carregando o módulo http na práica
var varhttp = require("http");

//criação de servidor http
varhttp.createServer(function(requisicao,resposta){
resposta.end("<h1>Bem vindo ao meu site!!!");
}).listen(8181);
console.log("Meu servidor está rodando");