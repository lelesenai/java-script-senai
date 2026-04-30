var nome = "Serena";
var vida = 3;
var moeda = 100;
var dano = 1;

function mostraPersonagem() {
    document.getElementById("ficha").innerHTML = `
    <div id="bgSerena">
        <img src="imanges/serenity.gif" id="icone" alt="">
    </div>
    <h1> 🌙 ${nome} <h1/>
    <p> ❤️ ${vida} </p>
    <p> 🪙 ${moeda} </p>
    <p> 🔪 ${dano} </p>
`;

}

document.getElementById("vida").addEventListener("click", addVida)
function addVida() {
    if (vida > 19) {
        alert("LIMITE DE VIDA MÁXIMA 20");
    } else {
        vida++;
    }

    mostraPersonagem();


};

mostraPersonagem();


document.getElementById("moeda").addEventListener("click", addMoeda)
function addMoeda() {

    var quantMoedas = confirm("Deseja adicionar 1 ou personalizado(cancelar)?");

    if (quantMoedas) {
        moeda++;
    } else {
        moeda = Number(prompt("Qual a quantidade de moedas?"))
    }
    mostraPersonagem();

};

document.getElementById("dano").addEventListener("click", addDano)
function addDano() {
    dano++;
    var arma = prompt(`Qual arma que a ${nome} está segurando? (MAISC)`).toUpperCase();
    //escolha (var)
    switch (arma) {
        case "MOON STICK":
            alert("Você selecionou Moon Stick! 50 dano");
            dano = 50;
            break;
        case "ETERNAL TIARE":
            alert("Você selecionou Eternal Tiare!");
            dano = 30
            break;
        default:
            alert("Arma não encontrada! Tente novamente")
    }
    mostraPersonagem();
};