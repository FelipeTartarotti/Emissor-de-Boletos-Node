var Boleto = require('node-boleto').Boleto;
var opn = require('opn');
var fs = require('fs'); 
var file = 'boleto.html';

var boleto = new Boleto({
  'banco': "bradesco", // nome do banco dentro da pasta 'banks'
  'data_emissao': new Date(),
  'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000), // 5 dias futuramente
  'valor': 1500, // R$ 15,00 (valor em centavos)
  'nosso_numero': "1234567",
  'numero_documento': "123123",
  'cedente': "Pagar.me Pagamentos S/A",
  'cedente_cnpj': "18727053000174", // sem pontos e traços
  'agencia': "3978",
  'codigo_cedente': "6404154", // PSK (código da carteira)
  'carteira': "102"
});

console.log("Linha digitável: " + boleto['linha_digitavel'])

boleto.renderHTML(function(html){

  fs.writeFile('boleto.html', html, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

  opn(file);
});

