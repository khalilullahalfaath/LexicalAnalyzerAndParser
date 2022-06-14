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

//OB
parse_table[["OB",'мать']] = ["error"]
parse_table[["OB",'отец']] = ["error"]
parse_table[["OB",'им']] = ["error"]
parse_table[["OB", 'ты']] = ["error"]
parse_table[["OB",'вы']] = ["error"]
parse_table[["OB",'готовит']] = ['error']
parse_table[["OB",'уяить']] = ['error']
parse_table[["OB",'рисовать']] = ['error']
parse_table[["OB",'читать']] = ['error']
parse_table[["OB",'книга']] = ['книга']
parse_table[["OB",'комар']] = ['комар']
parse_table[["OB",'pом']] = ['pом']
parse_table[["OB",'ученик']] = ['ученик']
parse_table[["OB",'EOS']] = ['error']

formParser.onsubmit = (event) => {
    event.preventDefault();
    var inputData = inputKalimatParser.value.toLowerCase();

    processParser(inputData.split(' '), inputData)
} 

var processParser = (tokens, sentences) => {
    // stack initialization
    var stack = [];
    stack.push('#');
    stack.push('I');

    tokens.push('EOS')
    console.log('tokens: ', tokens)
    var idxToken = 0;
    var symbol = tokens[idxToken];

    while(stack.length > 0) {
        var top = stack[stack.length - 1];
        console.log('top =', top);
        console.log('symbol =', symbol);
        if(terminals.includes(top)) {
            console.log('top adalah simbol terminal');  
            if(top == symbol) {
                stack.pop();
                idxToken += 1;
                symbol = tokens[idxToken];
                if(symbol == 'EOS') {
                    console.log('isi stack: ', stack);
                    stack.pop();
                }
            }
        } else if(nonTerminals.includes(top)) {
            console.log('top adalah simbol non terminal');
            if(parse_table[[top, symbol]][0] != 'error') {
                stack.pop();
                var symbolToBePushed = parse_table[[top, symbol]];
                console.log('symbol to be pushed: ', symbolToBePushed);
                for(let i = symbolToBePushed.length - 1; i > -1; i--) {
                    stack.push(symbolToBePushed[i]);
                }
            } else {
                console.log('error');
                break;
            }
        } else {
            console.log('error');
            break;
        }
        console.log('isi stack: ', stack);
    }

    // conclusion
    console.log('konklusi');
    if(symbol == 'EOS' && stack.length == 0) {
        console.log('Input string ', sentences, 'diterima sesuai grammar');
        hasilParser.value = `Input string ${sentences} diterima sesuai grammar`;
    } else {
        console.log('error, tidak diterima karena tidak sesuai grammar');
        hasilParser.value = 'error, tidak diterima karena tidak sesuai grammar';
    }
}