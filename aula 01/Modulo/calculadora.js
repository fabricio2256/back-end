//exempo pratico utilizando módulos
//Calculadora

//calculo de adição
function soma (a,b){
    return a+b;
}

//calculo de subitração
function sub (a,b){
    return a-b;
}

//calculo multiplicação
function mult (a,b){
    return a*b;
}

//calculo divisão
function div (a,b){
    return a/b;
}

//Exportação de multiplas funções 
module.exports = {
    soma,
    sub,
    mult,
    div,
}