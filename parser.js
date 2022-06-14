var InputKalimatParser = document.getElementById('input_kalimat_parser');
var HasilParser = document.getElementById('result-parser');
var clearParser = document.getElementById('btn-clear-parser');
var loadingParser = document.getElementById('loading-parser');
var form = document.getElementById('form-parser'); 

var nonTerminals = ['S', 'SB','VB','OB'];
var Terminals = ['мать', 'отец','им', 'ты','вы','готовит','уяить','рисовать',
                  'читать','книга','комар', 'pом', 'ученик' ];

var parse_table = []; 

//S 
parse_table[['S','мать']] = ['SB', 'VB', 'OB']
parse_table[['S','отец']] = ['SB', 'VB', 'OB']
parse_table[['S','им']] = ['SB', 'VB', 'OB']
parse_table[['S', 'ты']] = ['SB', 'VB', 'OB']
parse_table[['S','вы']] = ['SB','VB','OB']
parse_table[['S','готовит']] = ['error']
parse_table[['S','уяить']] = ['error']
parse_table[['S','рисовать']] = ['error']
parse_table[['S','читать']] = ['error']
parse_table[['S','книга']] = ['error']
parse_table[['S','комар']] = ['error']
parse_table[['S','pом']] = ['error']
parse_table[['S','ученик']] = ['error']
parse_table[['S','EOS']] = ['error']

//SB