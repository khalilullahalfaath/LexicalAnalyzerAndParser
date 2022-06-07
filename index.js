/*
    Inisialisasi:
    alfabet, daftar state
*/

const alfabet = [...'abcdefghijklmnopqrstuvwxyz'];
const stateList = [];

let N = 49;
for (let i = 0; i <= N; i++){
    var strAngka = i.toString();
    var str = "q";
    var namaState = str.concat(strAngka);
    stateList.push(namaState)
}

stateList.forEach(state => {
    alfabet.forEach(alfabet => {
        transitionTable[[state, alfabet]] = 'ERROR'
    });
    transitionTable[[state, '#']] = 'ERROR'
    transitionTable[[state, ' ']] = 'ERROR'
});

// initial state
transitionTable[["q0"," "]] = "q0";

// final state
transitionTable[["q38"," "]] = "q39";
transitionTable[["q38","#"]] = "ACCEPT";
transitionTable[["q39"," "]] = "q39";
transitionTable[["q39","#"]] = "ACCEPT";

