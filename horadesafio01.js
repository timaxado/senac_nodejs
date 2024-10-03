const readline = require('readline');

// Cria uma interface de leitura para receber entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius} graus Celsius é igual a ${fahrenheit} graus Fahrenheit.`);
}

// Solicita ao usuário que insira a temperatura em Celsius
rl.question('Digite a temperatura em graus Celsius: ', (celsiusInput) => {
    const celsius = parseFloat(celsiusInput); // Converte a entrada para um número

    // Verifica se a entrada é um número válido antes de converter
    if (!isNaN(celsius)) {
        converterCelsiusParaFahrenheit(celsius);
    } else {
        console.log("Por favor, insira um número válido.");
    }

    // Fecha a interface de leitura
    rl.close();
});