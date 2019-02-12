'use strict';

var prompt = require('prompt');

prompt.get(['number'], function(err, resp) {
  console.log('O número digitado foi:' + resp.number)
});