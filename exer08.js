'use strict';

/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas
trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
*/
var prompt = require('prompt');

console.log('Entre com os valores para: hora/trabalhada e hora/mês trabalhados');

prompt.get(['valorHora', 'horaMes'], function(err, resp) {
  var salario = Number(resp.valorHora * resp.horaMes);
  console.log('O seu salário no mês é de: ' + 'R$ ' + salario + ' neste mês.');
});