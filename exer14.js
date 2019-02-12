'use strict';

var prompt = require('prompt');

/*
João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar
o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. 
João precisa que você faça um
programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da
multa que João deverá pagar. Imprima os dados do programa com as mensagens
adequadas.
*/
console.log('Entre com a quantidade do peso do pescado');
prompt.get(['peso'], function(err, resp) {
  if (resp.peso > 50) {
    var excesso = resp.peso - 50;
    var multa = excesso * 4.00;

    console.log('Você excedeu o limite de peixes pecados ' + excesso + 'kg' + ' sua multa é de R$ ' + multa + '.');
  } else {
    console.log('Você não excedeu o limite de peixes pecados');
  }
});