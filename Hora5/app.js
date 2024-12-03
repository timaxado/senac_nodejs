const moment = require('moment');
require('moment/locale/pt-br'); 
moment.locale('pt-br');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log(`Olá, Seja Bem-vindo à Tech Time!`)



console.log("Entrada");
rl.question('Informe uma data (DD/MM/YYYY): ', (entrada) =>{

    console.log("Saída:")

    const diaSemana = moment().format('dddd');
    console.log("Dia da semana:", diaSemana);

    const dataInicial = moment();
    const dataFinal = moment(entrada, 'DD/MM/YYYY');
    const diferenca = dataFinal.diff(dataInicial, 'days');
    console.log("Dias até essa data:", diferenca);

    const trintaDiasDepois = moment(entrada, 'DD/MM/YYYY').add(30, 'days').format('DD/MM/YYYY');
    console.log('Data com 30 dias a mais: ', trintaDiasDepois);
    
    rl.close();
});