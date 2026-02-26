const personagem1 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundária: "",
    velocidade: 70,
    forca: 65,
    resistencia: 65,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma Principal:" + this.armaPrincipal + "\n"
            + "Arma Secundária:" + this.armaSecundária + "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistência:" + this.resistencia + "\n"  
        }
}

const personagem2 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Canhão de plasma na manopla",
    armaSecundária: "Canhão de plasma Reator Ark",
    velocidade: 80,
    forca: 70,
    resistencia: 70,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma Principal:" + this.armaPrincipal + "\n"
            + "Arma Secundária:" + this.armaSecundária + "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistência:" + this.resistencia + "\n"    
        }
}

const personagem3 = {
    nome: "Hulk",
    codinome: "O HULK",
    armaPrincipal: "HULK SMASH",
    armaSecundária: "SOCO DEVASTADOR",
    velocidade: 80,
    forca: 100,
    resistencia: 90,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma Principal:" + this.armaPrincipal + "\n"
            + "Arma Secundária:" + this.armaSecundária + "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistência:" + this.resistencia + "\n"    
        }
}

const personagem4 = {
    nome: "Thor",
    codinome: "Deus do Trovão",
    armaPrincipal: "Mjonir",
    armaSecundária: "",
    velocidade: 80,
    forca: 90,
    resistencia: 85,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma Principal:" + this.armaPrincipal + "\n"
            + "Arma Secundária:" + this.armaSecundária + "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistência:" + this.resistencia + "\n"    
        }
}

const personagem5 = {
    nome: "T'Challa",
    codinome: "Pantera Negra",
    armaPrincipal: "Garras de Vibrâneo",
    armaSecundária: "",
    velocidade: 70,
    forca: 65,
    resistencia: 70,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma Principal:" + this.armaPrincipal + "\n"
            + "Arma Secundária:" + this.armaSecundária + "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistência:" + this.resistencia + "\n"    
        }
}

const personagem6 = {
    nome: "Thanos",
    codinome: "O Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundária: "Espada Dupla",
    velocidade: 80,
    forca: 95,
    resistencia: 90,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma Principal:" + this.armaPrincipal + "\n"
            + "Arma Secundária:" + this.armaSecundária + "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistência:" + this.resistencia + "\n"    
        }
}

const personagens = [personagem1,personagem2,personagem3,personagem4,personagem5,personagem6]

function compararPersonagens(personagens) {
    for (let i = 0; i < personagens.length; i++){
        for (let j=i+1; j < personagens.length; j++){
            p1 = personagens[i]
            p2 = personagens[j]
            
            console.log('Iniciando Comparação entre: \n\n' + p1.descricao() + '\n ---  VERSUS --- \n\n' + p2.descricao())

            console.log(`Velocidade: ${p1.velocidade > p2.velocidade ? p1.codinome : p2.codinome} Venceu!\n`)
            console.log(`Força: ${p1.forca > p2.forca ? p1.codinome : p2.codinome} Venceu!\n`)
            console.log(`resistência: ${p1.resistencia > p2.resistencia ? p1.codinome : p2.codinome} Venceu!\n\n ----------//---------- \n`)
        }
    }
}

compararPersonagens(personagens)