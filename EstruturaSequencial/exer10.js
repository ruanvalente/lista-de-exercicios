'use strict';

var prompt = require('prompt');

console.log('Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit. (32 °C × 9/5) + 32 = 89,6 °F');

prompt.get(['tempC'], function(err, resp) {
  var tempF = Number(resp.tempC * 9 / 5) + 32;
  console.log('A temperatura de: ' + resp.tempC + 'Cº' + ' convertida para: ' + tempF + 'Fº')
});