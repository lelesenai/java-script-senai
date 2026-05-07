

        function aula(){
            // variavel <- vetor de {1..3} de caractere
            var lista ="1,2,3,4,5"
            var filmes = [
                "Megamente",
                "Meninas Malvadas",
                "legalmente loira"
            ];

            console.log(filmes);
            console.log(filmes);
            console.log("Um filme que esta BOMBANDO NAS INTERNETS é",filmes[0])
        
            // push adiciona no ultimo
            filmes.push("As branquelas");
            console.log(filmes)
              
            // shift adiciona no primeiro
            filmes.unshift("Homem Aranha")
            console.log(filmes)
            
            // pop deleta o ultimo
            filmes.pop();
            console.log(filmes);

            // shift deleta o primeiro
            filmes.shift();
            console.log(filmes)
           
            // spice (indice, quantos quer sobrescrever, dados)
            filmes.splice(1,0,"Bleach The Hell Movie")
            console.log(filmes)

           var filmesCopia = filmes.slice();
            console.log(filmesCopia)

            for(var i = 0; i < filmes.length; i ++){
                 console.log(filmes[i]);
            }

            filmes.map(filmes =>{
               console.log(cadaFilme);
            });
        }

       var doces = [
        ['PIRULITO','https://t3.ftcdn.net/jpg/03/13/11/68/360_F_313116897_dC5erY2iYlsAVqsxPxDGUmLkYwjHT6Ex.jpg',2.0],
       ['SENSAÇÃO', 'https://www.receitasnestle.com.br/sites/default/files/2021-11/tablete-chocolate-sensacao-morango.jpg',4.90],
       [ 'PIRULITO','https://docemalu.vtexassets.com/arquivos/ids/5361150/699ada7577089c57cc14a311a6b7b505b06d4114.jpg?v=639010526406500000',10.50],
       
    ]

doces.map(cadaDoce => {
     document.getElementById("produtos").innerHTML += `
        <div class="produtos">
             <img src="${cadaDoce[1]}" alt="">
             <h1>${cadaDoce[0]}</h1>
             <p> R$ ${cadaDoce[2]}</p>
             <button type="button">COMPRAR</button>
          </div>
        `
             })