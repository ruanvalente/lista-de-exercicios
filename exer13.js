'use strict';

var prompt = require('prompt');

/*
Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
	a. Para homens: (72.7*h) - 58
	b. Para mulheres: (62.1*h) - 44.7
*/
console.log('Entre com a sua altura');
prompt.get(['altura'], function(err, resp) {
  var man = (72.7 * resp.altura) - 58;
  var woman = (62.1 * resp.altura) - 44.7;
  console.log('O peso ideal para mulheres é de: ' + woman.toFixed(2));
  console.log('E para homems é de: ' + man.toFixed(2));
});