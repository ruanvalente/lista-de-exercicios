'use strict';

var prompt = require('prompt');

/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas
trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-
se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o
sindicato, faça um programa que nos dê:
a. salário bruto.
b. quanto pagou ao INSS.
c. quanto pagou ao sindicato.
d. o salário líquido.
e. calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.
*/
console.log('Quando você ganha por hora e por mês?');
prompt.get(['valorHora', 'horaMes'], function(err, resp) {
  var salario = Number(resp.valorHora * resp.horaMes);
  var ir = (salario / 100.0) * 11;
  var inss = (salario / 100.0) * 8;
  var sindicato = (salario / 100.0) * 5;
  var desconto = ir + inss + sindicato;
  var salarioLiquido = salario - desconto;

  console.log('Salário Bruto: R$' + salario);
  console.log('IR (11%): R$' + ir);
  console.log('INSS (8%): R$' + inss);
  console.log('Sindicato (5%): R$' + sindicato);
  console.log('Salário Liquido: R$' + salarioLiquido);
});
