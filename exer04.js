'use strict';

var prompt = require('prompt');

console.log('Entre com 4 notas para calcular sua média');

prompt.get(['number1', 'number2', 'number3', 'number4'], function(err, resp) {

  var media = (Number(resp.number1) + Number(resp.number2) + Number(resp.number3) + Number(resp.number4)) / 4;
  console.log('Sua média é: ' + media);
});