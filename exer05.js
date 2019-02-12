'use strict';

var prompt = require('prompt');

console.log('Entre com o valor em metros');

prompt.get(['metros'], function(err, resp) {
  var centimetros = Number(resp.metros) * 100;
  console.log('O valor em ' + resp.metros + 'm' + ' convertidos para ' + centimetros + 'cm');
});