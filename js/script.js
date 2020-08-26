// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno
// nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery




$(document).ready(function(){

    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
    var studente = {
        "nome": "Matteo",
        "cognome": "Bianchi",
        "eta": 21,
    };

    // Stampare a schermo attraverso il "for in" tutte le proprietà.
    for (var k in studente) {
        $(".studente").append(k + ": " + studente[k] + "</br>"); // ci vuole append perché .text() e.html() modificano, quindi sovrascrivono il valore
    }

    // Creare un array di oggetti di studenti.
    var classe = [
        {
            "nome": "Matteo",
            "cognome": "Bianchi",
            "eta": 21,
        },
        {
            "nome": "Giulia",
            "cognome": "Neri",
            "eta": 21,
        },
        {
            "nome": "Andrea",
            "cognome": "Rossi",
            "eta": 22,
        },
        {
            "nome": "Lucia",
            "cognome": "Verdi",
            "eta": 21,
        }
    ]

    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    for (var i = 0; i < classe.length; i++) {
        $(".classe").append(classe[i].nome + " " + classe[i].cognome + "</br>");
    }

    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
    // inserendo nell’ordine: nome, cognome e età.
    var nome = prompt("inserisci il tuo nome");
    var cognome = prompt("inserisci il tuo cognome");
    var eta = parseInt(prompt("Quanti anno hai?"));

    var nuovoStudente = {
        "nome": nome,
        "cognome": cognome,
        "eta": eta,
    };

    classe.push(nuovoStudente);
    console.log(classe);

    // stampare con jQuery
    for (var i = 0; i < classe.length; i++) {
        for (var k in classe[i]) {
            $(".nuovo").append(k + ": " + classe[i][k] + "</br>");
        }
    }
});
