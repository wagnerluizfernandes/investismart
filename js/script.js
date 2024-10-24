// Obtém os valores de entrada dos inputs
const nomeDoInvestidor = document.getElementById("nomeDoInvestidor"); 
// Seleciona o campo do formulário que contém o nome do investidor

const capitalInicial = document.getElementById("capitalInicial"); 
// Seleciona o campo do formulário que contém o valor do capital inicial

const taxaDeJurosMensal = document.getElementById("taxaDeJurosMensal"); 
// Seleciona o campo do formulário que contém a taxa de juros mensal

const numeroDeMeses = document.getElementById("numeroDeMeses"); 
// Seleciona o campo do formulário que contém o número de meses

function calcularMontante() {
    // Função que faz o cálculo do montante baseado nos inputs do usuário

    let valorCapitalInicial = parseFloat(capitalInicial.value);
    // Converte o valor do capital inicial de string para número com casas decimais
    
    let valorTaxaDeJurosMensal = parseFloat(taxaDeJurosMensal.value) / 100;
    // Converte a taxa de juros mensal para um valor decimal (dividindo por 100)
    
    let valorNumeroDeMeses = parseInt(numeroDeMeses.value);
    // Converte o valor do número de meses de string para número inteiro

    // Verifica se os valores são válidos
    if (!nomeDoInvestidor.value || isNaN(valorCapitalInicial) || isNaN(valorTaxaDeJurosMensal) || isNaN(valorNumeroDeMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        // Se algum valor estiver vazio ou inválido, exibe uma mensagem de erro
        return;
    }

    // Calcula o montante com base na fórmula de juros compostos
    let valorMontante = valorCapitalInicial * Math.pow(1 + valorTaxaDeJurosMensal, valorNumeroDeMeses);
    // Aplica a fórmula do montante: Montante = CapitalInicial * (1 + taxaDeJuros)^númeroDeMeses

    // Exibe o resultado em um alert
    alert(
        "Olá "+nomeDoInvestidor.value+"\n"+
        // Saudação personalizada com o nome do investidor
        "O seu investimento gerará o Montante de "+valorMontante.toFixed(2)
        // Exibe o montante final calculado, arredondado para duas casas decimais
    );
}
