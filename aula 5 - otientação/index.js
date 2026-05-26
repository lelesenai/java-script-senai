
// var nomePersonagem = "Sonic";
// var vidaPersonagem = 3;

// personagens = [
// ["Sonic", 3]
// ]

class Personagens {
    nome;
    vida;
    tamanho;
    velocidade;
    habilidade;
    atacar(){};
    abaixar(){};
    pular(){};
} 

p1 = new Personagem() 
p1.nome = "Sonic";
p1.vida = 4;
p1.tamanho = "Médio";
p1.velocidade = "Rapido";
p1.habilidade = ["Corre Rapido", "SpinDash", "Velocidade"]

class PersonagensEspeciais {
    Badnics(nomeP,vida,tamanho,velocidade,habilidade){
        this.nome = nome;
        this.vida = vida;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.habilidade = habilidade;
        this.atacar = function(){
            alert("Puf")
        };
        // todosPersonagens[0].atacar()
    }
}

todosPersonagens =[]
todosPersonagens.push (new PersonagensEspeciais("EggBot", 1, "Pequeno", "Normal",["Toque"]))
