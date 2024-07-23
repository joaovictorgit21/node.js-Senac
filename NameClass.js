export class Pessoa {
    constructor (name, sobrenome, idade, apelido) {
        this.name = "Jão"
        this.sobrenome = "Farias"
        this.idade = "17"
        this.apelido = "Luffy"
    }

    falar() {
        console.log("Olá, eu sou o " + this.name + ", seu assistente pessoal")
    }
}