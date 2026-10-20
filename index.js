const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

// rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo à biblioteca!</h1>");
})

// rota da lista de livros
app.get("/livros", function(req,res){
    res.send("<h1>Lista de Livros!</h1>");
})

// rota com parâmetro
app.get("/consulta/:livro", function(req,res){
    // req --> dados enviados pelo cliente
    // res --> resposta enviada pelo servidor
    res.send("Livro consultado: " + req.params.livro);
})

// rota com parâmetro opcional
app.get("/cadastro/{:nome}", function(req,res){
    var nome = req.params.nome;

    if (nome){
        res.send("<h1>Livro " + nome + " cadastrado!</h1>");
    }else{
        res.send("Livro cadastrado!");
    }
})


app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

