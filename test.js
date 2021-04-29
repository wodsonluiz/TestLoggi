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

        var listaResult = []

        console.log("Resultados");
        
        for (let y = 0; y < listMovimentacoes.length; y++) {

            var obj = listMovimentacoes[y];
            var objResut = listaResult.find(o => o.conta == obj.debito)

            if(objResut == null)
            {
                listaResult.push(
                    {
                        "conta" : obj.debito,
                        "saida" : obj.valor,
                        "entrada" : 0
                    }
                )
            }
            else{
                objResut.saida = obj.valor + objResut.saida
            }
        }

        for (let y = 0; y < listMovimentacoes.length; y++) {

            var obj = listMovimentacoes[y];
            var objResut = listaResult.find(o => o.conta == obj.creditada)

            if(objResut == null)
            {
                listaResult.push(
                    {
                        "conta" : obj.creditada,
                        "saida" : 0,
                        "entrada" : obj.valor
                    }
                )
            }
            else{
                objResut.entrada = obj.valor + objResut.entrada
            }
        }

        console.log(listaResult);

    }
