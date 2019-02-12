'use strict';

var prompt = require('prompt');

console.log('Entre com a área do circulo: ');

prompt.get(['raio'], function(err, resp) {
  var pi = 3.14;
  var area = pi * Number(resp.raio * resp.raio);
  console.log('A área é de: ' + area + 'm²');
});