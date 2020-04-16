// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function(){
  // - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  var studente = {
    "nome" : "Marco",
    "cognome" : "Marchi",
    "eta" : 11
  };

  // -Stampare a schermo attraverso il for in tutte le proprietà;
  for (var key in studente){
    console.log(studente[key]);
  };

  // - Creare un array di oggetti di studenti.
  var studenti = [
    {
      "nome" : "Giorgio",
      "cognome" : "Anselmi",
      "eta" : 20
    },
    {
      "nome" : "Michela",
      "cognome" : "Rossi",
      "eta" : 19
    },
    {
      "nome" : "Giacomo",
      "cognome" : "Gianchi",
      "eta" : 25
    },
    {
      "nome" : "Martina",
      "cognome" : "Morelli",
      "eta" : 23
    }
  ];

  // creo oggetto studente vuoto da riempire con prompt nuovoStudente
  var nuovoStudente = {};

  // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var nomeNuovoStudente = prompt("Inserisci il nome studente");
  var cognomeNuovoStudente = prompt("inserisci il cognome studente");
  var etaNuovoStudente = parseInt(prompt("inserisci l'età dello studente"));

  nuovoStudente.nome = nomeNuovoStudente;
  nuovoStudente.cognome = cognomeNuovoStudente;
  nuovoStudente.eta = etaNuovoStudente;

  // aggiungo un nuovo studente
  studenti.push(nuovoStudente);

  // handlebars
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  // -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
  for (var i = 0; i < studenti.length; i++) {
    // console.log(studenti[i]);
    var studenteNum = studenti[i];
    var nomeStudente = studenteNum.nome;
    var cognomeStudente = studenteNum.cognome;
    console.log('nome studente ' + nomeStudente + ' cognome studente ' + cognomeStudente);
    var context = {"nomeStu": nomeStudente, "cognomeStu": cognomeStudente};
    var html = template(context);
    $('.elenco-studenti').append(html);
  };

})
