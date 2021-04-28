function AtividadeLoggi(){
    console.log("==> Atividade começa aqui <===");

    var listMovimentacoes = [
        {
            "valor" : 10,
            "debito": "carteira",
            "creditada" : "boteco"
        },
        {
            "valor" : 50,
            "debito": "conta corrente",
            "creditada" : "carteira"
        },
        {
            "valor" : 200,
            "debito": "conta corrente",
            "creditada" : "investimento"
        }
    ];

    var listaResult = [
        {
            "conta" : "carteira",
            "saida" : 0,
            "entrada" : 0
        },
        {
            "conta" : "conta corrente",
            "saida" : 0,
            "entrada" : 0
        },
        {
            "conta" : "boteco",
            "saida" : 0,
            "entrada" : 0
        },
        {
            "conta" : "investimento",
            "saida" : 0,
            "entrada" : 0
        }
    ]

    console.log("Resultados");
    
    for (let y = 0; y < listMovimentacoes.length; y++) {
        
        if(listMovimentacoes[y].debito == "carteira"){
            SetDebito(listaResult.find(l => l.conta == listMovimentacoes[y].debito), listMovimentacoes[y].valor)
        }
        if(listMovimentacoes[y].debito == "boteco"){
            SetDebito(listaResult.find(l => l.conta == listMovimentacoes[y].debito), listMovimentacoes[y].valor)
        }
        if(listMovimentacoes[y].debito == "conta corrente"){
            SetDebito(listaResult.find(l => l.conta == listMovimentacoes[y].debito), listMovimentacoes[y].valor)
        }
        if(listMovimentacoes[y].debito == "investimento"){
            SetDebito(listaResult.find(l => l.conta == listMovimentacoes[y].debito), listMovimentacoes[y].valor)
        }
    }

    for (let y = 0; y < listMovimentacoes.length; y++) {
        
        if(listMovimentacoes[y].creditada == "carteira"){
            SetEntrada(listaResult.find(l => l.conta == listMovimentacoes[y].creditada), listMovimentacoes[y].valor)
        }
        
        if(listMovimentacoes[y].creditada == "boteco"){
            SetEntrada(listaResult.find(l => l.conta == listMovimentacoes[y].creditada), listMovimentacoes[y].valor)
        }

        if(listMovimentacoes[y].creditada == "conta corrente"){
            SetEntrada(listaResult.find(l => l.conta == listMovimentacoes[y].creditada), listMovimentacoes[y].valor)
        }

        if(listMovimentacoes[y].creditada == "investimento"){
            SetEntrada(listaResult.find(l => l.conta == listMovimentacoes[y].creditada), listMovimentacoes[y].valor)
        }
    }

    function SetDebito(obj, valor){
        obj.saida = valor + obj.saida 
        listMovimentacoes.push(obj);
    }

    function SetEntrada(obj, valor){
        obj.entrada = valor + obj.entrada 
        listMovimentacoes.push(obj);
    }

    console.log(listaResult);

}