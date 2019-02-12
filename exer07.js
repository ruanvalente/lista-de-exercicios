'use strict';

var prompt = require('prompt');

console.log('Entre com a altura/largura do quadrado, respectivamente: ');

prompt.get(['altura', 'largura'], function(err, resp) {
  var area = Number(resp.altura * resp.largura);
  console.log('O dobro da área é de: ' + (area * 2) + 'm²');
});