'use strict';

var prompt = require('prompt');

console.log('Entre com dois números ');

prompt.get(['number01', 'number02'], function(err, resp) {
  var sum = Number(resp.number01) + Number(resp.number02);
  console.log(sum);
});