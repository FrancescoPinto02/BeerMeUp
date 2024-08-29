// Esempio di file JavaScript con errori e cattive pratiche per testare SonarCloud

// Variabile non utilizzata
let unusedVariable = 42;

// Funzione con troppi parametri
function calculateArea(length, width, height, unit, precision) {
    return length * width;
}

// Codice duplicato
function duplicateCodeExample1() {
    let x = 5;
    let y = 10;
    let result = x + y;
    console.log(result);
}

function duplicateCodeExample2() {
    let x = 5;
    let y = 10;
    let result = x + y;
    console.log(result);
}

// Uso non sicuro di eval
function unsafeEval(userInput) {
    return eval(userInput); // Questa è una pratica estremamente pericolosa!
}

// Funzione con complessità ciclomatica elevata
function complexFunction(a, b, c, d, e) {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                console.log("Tutti positivi");
            } else if (d > 0) {
                console.log("a, b, e d sono positivi");
            } else {
                console.log("Solo a e b sono positivi");
            }
        } else {
            console.log("Solo a è positivo");
        }
    } else if (e > 0) {
        console.log("Solo e è positivo");
    } else {
        console.log("Tutti sono negativi o zero");
    }
}

// Funzione che ritorna sempre lo stesso valore, indipendentemente dall'input
function alwaysReturnSameValue(input) {
    if (input === 1) {
        return 42;
    } else if (input === 2) {
        return 42;
    } else {
        return 42;
    }
}

// Bug comune: confusione tra assegnazione e confronto
function assignmentInsteadOfComparison(a) {
    if (a = 10) { // Qui dovrebbe essere un confronto, non un'assegnazione
        console.log("a è uguale a 10");
    }
}

// Funzione che potrebbe causare un memory leak
function memoryLeakExample() {
    const largeArray = [];
    for (let i = 0; i < 1000000; i++) {
        largeArray.push({ index: i });
    }
    // Dimentichiamo di svuotare l'array o di usare un meccanismo di gestione della memoria appropriato
}

