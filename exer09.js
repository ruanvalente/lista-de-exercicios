'use strict';

var prompt = require('prompt');

console.log('Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).');

prompt.get(['tempF'], function(err, resp) {
  var tempC = Number(5 * (resp.tempF - 32) / 9);
  console.log('A temperatura em de: ' + resp.tempF + 'Fº' + ' convertida para ' + tempC + 'Cº');
});