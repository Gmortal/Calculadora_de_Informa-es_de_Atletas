class Atleta {
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas
  }

  calculaCategoria(){
    if (this.idade >= 9 && this.idade <= 11){
      return "Infantil"
    }else if (this.idade >= 12 && this.idade <= 13){
      return "Juvenil"
    }else if (this.idade >= 14 && this.idade <= 15){
      return "Intermediário"
    }else if (this.idade >= 16 && this.idade <= 30){
      return "Adulto"
    } else{
      return "Sem categoria"
    }
  }
  
  calculaIMC() {
    const alturametros = this.altura;
    const imc = this.peso / (this.altura * this.altura)
    return imc
  }

  calculaMediaValida(){
    let sorteDeNotas = this.notas.slice().sort((a ,b) => a - b);
    let notasValidas = sorteDeNotas.slice(1, 4);

    let soma = notasValidas.reduce((total, num) => total + num, 0);

    let media = soma / notasValidas.length;

    return media.toFixed(2);

  }

  obtemNomeAtleta(){
    return this.nome;
  }

  obtemIdadeAtleta(){
    return this.idade;
  }

  obtemPesoAtleta(){
    return this.peso;
  }

  obtemNotasAtleta(){
    return this.notas;
  }

  obtemAlturaAtleta(){
    return this.altura
  }

  obtemCategoria(){
    return this.calculaCategoria();
  }

  obtemIMC(){
    return this.calculaIMC();
  }

  obtemMediaValida(){
    return this.calculaMediaValida();
  }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(', ')}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);