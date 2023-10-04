// - Chiedere numero di chilometri che vuole percorrere 
//     - dichiarare una variabile
let userKilometers;

//     - assegnare alla variabile il valore restituito dal prompt
userKilometers = prompt("chilometri da percorrere");
userKilometers = parseFloat(userKilometers)
console.log(userKilometers);
// - Chiedere l’età del passeggero
//     - dichiarare una variabile
let userAge;

//     - assegnare alla variabile il valore restituito dal prompt
userAge = prompt("inserisci l'età");
userAge = parseInt(userAge)
console.log(userAge);

// - Calcolare il prezzo totale del viaggio
//     - assegnare variabile del prezzo al chilometro
const costPerKm = 0.21
//     - Calcolare il prezzo standard in base ai chilomerti
let standardPrice = (userKilometers * costPerKm)
console.log(standardPrice)
//     - assegnare variabili agli sconti
const sconto20 = (20 / 100)
const sconto40 = (40 / 100)
console.log(sconto20, sconto40)
//     - Calcolare il gli sconti in base all'età
//     - Calalcolare il prezzo finale eventualmente scontato
let finalPrice
if (isNaN(userAge)) {
    	console.log('I dati inseriti non sono validi')
} else {
    if (userAge > 65) {
    		//     - SE userAge > 65
    		//       - sconto 40%
            let over65Disc = (standardPrice * sconto40)
    		console.log(over65Disc)

            //       - prezzo finale over 65 a 2 decimali

            let over65FinalPrice = (standardPrice - over65Disc)
            over65FinalPrice = parseFloat(over65FinalPrice).toFixed(2)
            console.log(over65FinalPrice)
    } else if (userAge < 18) {
    		//     - ALTRIMENTI SE userAge < 18
    		//       - sconto 20%
            let under18Disc = (standardPrice * sconto20)
    		console.log(under18Disc)

            //       - prezzo finale under 18 a 2 decimali

            let under18FinalPrice = (standardPrice - under18Disc)
            under18FinalPrice = parseFloat(under18FinalPrice).toFixed(2)
            console.log(under18FinalPrice)

    } else {
    		//     - ALTRIMENTI
    		//       - prezzo standard a 2 decimali
            standardPrice = parseFloat(standardPrice).toFixed(2)
            console.log(standardPrice)
    }
}