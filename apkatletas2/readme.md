**Projeto Calculadora de Informações de Atletas**
Este é o segundo projeto do DevStar consiste em uma aplicação em JavaScript que utiliza a classe Atleta para gerenciar informações e calcular parâmetros de um atleta, incluindo categoria, IMC (Índice de Massa Corporal) e média de notas válidas.

**Funcionalidades**
Recebe informações de um atleta, incluindo nome, idade, peso, altura e notas.
Calcula a categoria do atleta com base na idade.
Calcula o IMC do atleta com base no peso e altura.
Calcula a média das notas válidas do atleta.
Classe Atleta
A classe Atleta possui os seguintes atributos e métodos:

**Atributos**
nome: Nome do atleta.
idade: Idade do atleta.
peso: Peso do atleta (em quilogramas).
altura: Altura do atleta (em metros).
notas: Array de notas atribuídas ao atleta.

**Métodos**
calculaCategoria(): Calcula e retorna a categoria do atleta com base na idade.
calculaIMC(): Calcula e retorna o IMC (Índice de Massa Corporal) do atleta.
calculaMediaValida(): Calcula e retorna a média das notas válidas do atleta.

**Métodos de Obtenção de Informações**
obtemNomeAtleta(): Retorna o nome do atleta.
obtemIdadeAtleta(): Retorna a idade do atleta.
obtemPesoAtleta(): Retorna o peso do atleta.
obtemAlturaAtleta(): Retorna a altura do atleta.
obtemNotasAtleta(): Retorna as notas do atleta.
obtemCategoria(): Retorna a categoria calculada do atleta.
obtemIMC(): Retorna o IMC calculado do atleta.
obtemMediaValida(): Retorna a média das notas válidas do atleta.

Exemplo de Uso
javascript
Copy code
// Criar um objeto Atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibir informações do atleta
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(', ')}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);

**Contribuições**
Contribuições são bem-vindas! Se você deseja melhorar este projeto ou adicionar novos recursos, sinta-se à vontade para abrir um problema ou enviar uma solicitação de recebimento (pull request).