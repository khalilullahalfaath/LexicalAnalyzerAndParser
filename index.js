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

//Subject мать
transitionTable[["q0","м"]] = "q1"
transitionTable[["q1","а"]] = "q2"
transitionTable[["q2","т"]] = "q3"
transitionTable[["q3","ь"]] = "q4"

//subject отец
transitionTable[["q0","о"]] = "q6"
transitionTable[["q6","т"]] = "q7"
transitionTable[["q7","e"]] = "q8"
transitionTable[["q8","ц"]] = "q4"

//subject я
transitionTable[["q0","я"]] = "q9"

//subject ты
transitionTable[["q0","т"]] = "q10"
transitionTable[["q10","ы"]] = "q4"

//subject вы
transitionTable[["q0","в"]] = "q11"
transitionTable[["q11","ы"]] = "q4"

//Verb готовит
transitionTable[["q12","г"]] = "q13"
transitionTable[["q13","о"]] = "q51"
transitionTable[["q51","т"]] = "q14"
transitionTable[["q14","о"]] = "q15"
transitionTable[["q15","в"]] = "q16"
transitionTable[["q16","и"]] = "q52"
transitionTable[["q52","т"]] = "q17"

//verb учить
transitionTable[["q12","у"]] = "q19"
transitionTable[["q19","ч"]] = "q20"

