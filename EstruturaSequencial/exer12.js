'use strict';

var prompt = require('prompt');

/*
Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que
calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
*/
console.log('Entre com a altura e o seu peso respectivamente');
prompt.get(['altura'], function(err, resp) {
  var result = (72.7 * resp.altura) - 58;
  console.log('O peso ideal é: ' + result.toFixed(2));
});