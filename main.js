let listaCognomi =['rossi','bianchi','verdi','zuzzurro','vercesi','curcio'];
//ARRAY LISTA COGNOMI


let cognomeUmano = prompt('inserisci il tuo cognome')
//PROMPT CHE PERMETTERA' L'INSERIMETO IN LISTA DEL TUO COGNOME

listaCognomi.push(cognomeUmano);
document.querySelector('#cognome').innerHTML="ecco il tuo cognome inserito"+" "+cognomeUmano

console.log(listaCognomi);

let listaOrdinata = listaCognomi.sort();
console.log(listaOrdinata);

let posizione = listaOrdinata.indexOf(cognomeUmano)+1

document.querySelector('#posizione').innerHTML='la posizione umana del tuo cognome nella lista è la posizione n°'+" "+posizione

console.log(posizione);


for(let i = 0; i < listaOrdinata.length;i++){
    console.log(listaOrdinata[i]);

    document.querySelector('#lista').innerHTML+=`<li>${listaOrdinata[i]}</li>`
}


