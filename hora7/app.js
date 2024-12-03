
function obterTemperatura() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const temperatura = 25; //temperatura fixa para simulação
            resolve(temperatura);
        }, 3000); //espera  os 3 segundos, cada segundo cada 1000

    });


}

async function verificarClima() {
    try {

        const temperatura = await obterTemperatura(); //espera pela temperatura
        console.log(`A temperatura obtida é: ${temperatura}°C`); //exibe a temperatura no console

    } catch (error) {
        console.error('Erro ao obter a temperatura:', error);

    }

}

verificarClima();