'use strict';

var prompt = require('prompt');

console.log('Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:\na. o produto do dobro do primeiro com metade do segundo .\nb. a soma do triplo do primeiro com o terceiro.\nc. o terceiro elevado ao cubo.');

prompt.get(['num1', 'num2', 'num3'], function(err, resp) {
  var resultadoA = Number(resp.num1 * 2) * Number(resp.num2 / 2);
  var resultadoB = Number(resp.num1 * 3) + Number(resp.num3);
  var resultadoC = Number(Math.pow(resp.num3, 3));

  console.log('Resultados:\n');
  console.log('A: ' + resultadoA + '\n');
  console.log('B: ' + resultadoB + '\n');
  console.log('C: ' + resultadoC + '\n');
});