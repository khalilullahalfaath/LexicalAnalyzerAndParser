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
transitionTable[["q20","и"]] = "q21"
transitionTable[["q21","т"]] = "q22"
transitionTable[["q22","ь"]] = "q17"

//verb тянуть
transitionTable[["q12","т"]] = "q23"
transitionTable[["q23","я"]] = "q24"
transitionTable[["q24","н"]] = "q25"
transitionTable[["q25","у"]] = "q21"
transitionTable[["q21","т"]] = "q22"
transitionTable[["q22","ь"]] = "q17"

//verb рисовать
transitionTable[["q12","р"]] = "q26"
transitionTable[["q26","и"]] = "q27"
transitionTable[["q27","с"]] = "q28"
transitionTable[["q28","о"]] = "q29"
transitionTable[["q29","в"]] = "q30"
transitionTable[["q30","а"]] = "q21"
transitionTable[["q21","т"]] = "q22"
transitionTable[["q22","ь"]] = "q17"

//verb читать
transitionTable[["q12","ч"]] = "q31"
transitionTable[["q31","и"]] = "q32"
transitionTable[["q32","т"]] = "q30"
transitionTable[["q30","а"]] = "q21"
transitionTable[["q21","т"]] = "q22"
transitionTable[["q22","ь"]] = "q17"

//object книга
transitionTable[["q33","к"]] = "q34"
transitionTable[["q34","н"]] = "q35"
transitionTable[["q35","и"]] = "q36"
transitionTable[["q36","г"]] = "q37"
transitionTable[["q37","а"]] = "q38"

//object комар
transitionTable[["q33","к"]] = "q34"
transitionTable[["q34","о"]] = "q40"
transitionTable[["q40","м"]] = "q41"
transitionTable[["q41","а"]] = "q42"
transitionTable[["q42","р"]] = "q38"

//object рис
transitionTable[["q33","р"]] = "q43"
transitionTable[["q43","и"]] = "q44"
transitionTable[["q44","с"]] = "q38"

//object ученик
transitionTable[["q33","у"]] = "q45"
transitionTable[["q45","ч"]] = "q46"
transitionTable[["q46","е"]] = "q47"
transitionTable[["q47","н"]] = "q48"
transitionTable[["q48","и"]] = "q49"
transitionTable[["q49","к"]] = "q38"