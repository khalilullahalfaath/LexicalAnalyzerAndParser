/*
    Inisialisasi:
    alfabet, daftar state
*/

const alfabet = [...'abcdefghijklmnopqrstuvwxyz'];
const stateList = [];

let N = 42;
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
transitionTable[["q4"," "]] = "q5";
transitionTable[["q4","#"]] = "ACCEPT";
transitionTable[["q5"," "]] = "q5";
transitionTable[["q5","#"]] = "ACCEPT";

//Subject мать
transitionTable[["q0","м"]] = "q1"
transitionTable[["q1","а"]] = "q2"
transitionTable[["q2","т"]] = "q3"
transitionTable[["q3","ь"]] = "q4"

transitionTable[["q5","м"]] = "q1"

//subject отец
transitionTable[["q0","о"]] = "q6"
transitionTable[["q6","т"]] = "q7"
transitionTable[["q7","e"]] = "q8"
transitionTable[["q8","ц"]] = "q4"

transitionTable[["q5","о"]] = "q6"

//subject я
transitionTable[["q0","я"]] = "q9"
transitionTable[["q9"," "]] = "q5"
transitionTable[["q9","#"]] = "ACCEPT"

transitionTable[["q5","я"]] = "q9"

//subject ты
transitionTable[["q0","т"]] = "q10"
transitionTable[["q10","ы"]] = "q4"

transitionTable[["q5","т"]] = "q10"

//subject вы
transitionTable[["q0","в"]] = "q11"
transitionTable[["q11","ы"]] = "q4"

transitionTable[["q5","в"]] = "q11"

//Verb готовит
transitionTable[["q0","г"]]  = "q12"
transitionTable[["q12","о"]] = "q13"
transitionTable[["q13","т"]] = "q14"
transitionTable[["q14","о"]] = "q15"
transitionTable[["q15","в"]] = "q16"
transitionTable[["q16","и"]] = "q17"
transitionTable[["q17","т"]] = "q4"

transitionTable[["q5","г"]] = "q12"

//verb учить
transitionTable[["q0","у"]] = "q18"
transitionTable[["q18","ч"]] = "q19"
transitionTable[["q29","и"]] = "q20"
transitionTable[["q20","т"]] = "q21"
transitionTable[["q21","ь"]] = "q4"

transitionTable[["q5","у"]] = "q18"

//verb тянуть
transitionTable[["q10","я"]] = "q22"
transitionTable[["q22","н"]] = "q23"
transitionTable[["q23","у"]] = "q20"

//verb рисовать
transitionTable[["q0","р"]] = "q24"
transitionTable[["q24","и"]] = "q25"
transitionTable[["q25","с"]] = "q26"
transitionTable[["q26","о"]] = "q27"
transitionTable[["q27","в"]] = "q28"
transitionTable[["q28","а"]] = "q20"

transitionTable[["q5","p"]] = "q24"

//verb читать
transitionTable[["q0","ч"]] = "q29"
transitionTable[["q29","и"]] = "q30"
transitionTable[["q30","т"]] = "q28"

transitionTable[["q5","p"]] = "q29"

//object книга
transitionTable[["q0","к"]] = "q31"
transitionTable[["q31","н"]] = "q32"
transitionTable[["q32","и"]] = "q33"
transitionTable[["q33","г"]] = "q34"
transitionTable[["q34","а"]] = "q4"

transitionTable[["q5","к"]] = "q31"

//object комар
transitionTable[["q31","о"]] = "q35"
transitionTable[["q35","м"]] = "q36"
transitionTable[["q36","а"]] = "q37"
transitionTable[["q37","р"]] = "q4"

//object рис
transitionTable[["q24","и"]] = "q38"
transitionTable[["q38","с"]] = "q4"

//object ученик
transitionTable[["q18","ч"]] = "q39"
transitionTable[["q39","е"]] = "q40"
transitionTable[["q40","н"]] = "q41"
transitionTable[["q41","и"]] = "q42"
transitionTable[["q42","к"]] = "q4"
