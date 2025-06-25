document.addEventListener('DOMContentLoaded', function() {

    class Atleta {
        constructor(nome, idade, peso, altura, notas) {
            this.nome = nome;
            this.idade = idade;
            this.peso = peso;
            this.altura = altura;
            this.notas = notas;
        }

        calculaCategoria() {
            if (this.idade >= 9 && this.idade <= 11) return "Infantil";
            if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
            if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
            if (this.idade >= 16 && this.idade <= 30) return "Adulto";
            return "Sem categoria";
        }

        calculaIMC() {
            if (this.altura === 0) return 0;
            return (this.peso / (this.altura * this.altura));
        }

        // NOVO: Método para obter a classificação do IMC
        calculaClassificacaoIMC() {
            const imc = this.calculaIMC();
            if (imc === 0) return "N/A";
            if (imc < 18.5) return "Abaixo do peso";
            if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
            if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
            if (imc >= 30 && imc <= 34.9) return "Obesidade grau I";
            if (imc >= 35 && imc <= 39.9) return "Obesidade grau II";
            if (imc >= 40) return "Obesidade grau III";
        }

        calculaMediaValida() {
            let sorteDeNotas = this.notas.slice().sort((a, b) => a - b);
            let notasValidas = sorteDeNotas.slice(1, -1);
            if (notasValidas.length === 0) return "N/A";
            let soma = notasValidas.reduce((total, num) => total + num, 0);
            return (soma / notasValidas.length).toFixed(2);
        }

        obtemNomeAtleta() { return this.nome; }
        obtemIdadeAtleta() { return this.idade; }
        obtemPesoAtleta() { return this.peso; }
        obtemNotasAtleta() { return this.notas; }
        obtemAlturaAtleta() { return this.altura; }
        obtemCategoria() { return this.calculaCategoria(); }
        obtemIMC() { return this.calculaIMC().toFixed(2); }
        obtemMediaValida() { return this.calculaMediaValida(); }
        // NOVO: Getter para a classificação do IMC
        obtemClassificacaoIMC() { return this.calculaClassificacaoIMC(); }
    }

    const form = document.getElementById('athlete-form');
    const cardResultContainer = document.getElementById('card-result-container');
    const clearButton = document.getElementById('clear-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value, 10);
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const notasString = document.getElementById('notas').value;
        const notas = notasString.split(',').map(nota => nota.trim()).filter(nota => nota !== "").map(nota => parseFloat(nota));

        if (notas.some(isNaN) || notas.length < 3) {
            alert("Erro: Por favor, insira pelo menos 3 notas válidas separadas por vírgula.");
            return;
        }

        const atleta = new Atleta(nome, idade, peso, altura, notas);
        exibirDadosAtleta(atleta);
        cardResultContainer.classList.remove('hidden');
        cardResultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    clearButton.addEventListener('click', function() {
        form.reset();
        cardResultContainer.classList.add('hidden');
        form.scrollIntoView({ behavior: 'smooth' });
    });

    function exibirDadosAtleta(atleta) {
        // Atualiza a maioria dos dados
        document.querySelector('.athlete-photo').src = `https://i.pravatar.cc/150?u=${encodeURIComponent(atleta.obtemNomeAtleta())}`;
        document.getElementById('atleta-nome').textContent = atleta.obtemNomeAtleta();
        document.getElementById('atleta-categoria').textContent = atleta.obtemCategoria();
        document.getElementById('atleta-imc').textContent = atleta.obtemIMC();
        document.getElementById('atleta-media').textContent = atleta.obtemMediaValida();
        document.getElementById('atleta-idade').textContent = atleta.obtemIdadeAtleta();
        document.getElementById('atleta-peso').textContent = atleta.obtemPesoAtleta();
        document.getElementById('atleta-altura').textContent = atleta.obtemAlturaAtleta().toFixed(2);

        // ATUALIZAÇÃO: Lógica para exibir e colorir a classificação do IMC
        const classificacaoElement = document.getElementById('atleta-imc-classificacao');
        const classificacaoTexto = atleta.obtemClassificacaoIMC();
        classificacaoElement.textContent = classificacaoTexto;

        // Remove classes de status antigas
        classificacaoElement.classList.remove('status-normal', 'status-warning', 'status-danger');

        // Adiciona a nova classe de status baseada no texto
        switch (classificacaoTexto) {
            case 'Peso normal':
                classificacaoElement.classList.add('status-normal');
                break;
            case 'Abaixo do peso':
            case 'Sobrepeso':
                classificacaoElement.classList.add('status-warning');
                break;
            case 'Obesidade grau I':
            case 'Obesidade grau II':
            case 'Obesidade grau III':
                classificacaoElement.classList.add('status-danger');
                break;
        }

        // Atualiza as notas
        const notasContainer = document.getElementById('atleta-notas');
        notasContainer.innerHTML = '';
        atleta.obtemNotasAtleta().forEach(nota => {
            const notaElement = document.createElement('span');
            notaElement.className = 'nota';
            notaElement.textContent = nota;
            notasContainer.appendChild(notaElement);
        });
    }
});