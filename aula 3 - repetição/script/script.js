
function aula () {
    //enquanto () faca...
    //para con ate con2 interable
    var i = 0
;
while (i < 10){
    console.log(i);
    i++
}
while(false){
    var pergunta = confirm ("Repete?");

    if (pergunta == false)
 break;

    }
    for(var I;I<100;I++){
        
    }
}
aula ();

function produtos(){
    for(var i = 0;i<10;i++){
        document.getElementById("produtos").innerHTML +='
           <div class="produtos">
            <img src="styles/AAA.jpg" alt="">
            <h1>PIRULITO</h1>
            <p>R$ 20</p>
            <button type="button">COMPRAR</button>
         </div>
         ';
    }
}

produtos();