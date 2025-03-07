// Étape 1

// Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

// Étape 2
// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. 
// Pour rappel, on a 50 allumettes au départ.


const ALLUMETTESDEBASE = 50
// let allumettesRestantes = 0

function choixNbAllumettes () {
    
    choixAllumettesEnlevees = Number(prompt("Choisir un nombre d'allumettes entre 1 et 6"))
    while (!(choixAllumettesEnlevees > 0 && choixAllumettesEnlevees < 7)) {
        choixAllumettesEnlevees = Number(prompt("Oups! un nombre d'allumettes entre 1 et 6"))
    }
    return choixAllumettesEnlevees
}
// console.log(choixNbAllumettes())
// console.log(choixAllumettesEnlevees+ " allumettes ont été enlevées")

// let nombreAllumettesEnlevees = choixNbAllumettes()


function calculAllumettesRestantes(nombreAllumettesEnlevees) {
   console.log("Nous devons enlever "+ nombreAllumettesEnlevees + " allumettes.")
   let allumettesRestantesCalcul = ALLUMETTESDEBASE - nombreAllumettesEnlevees
    return allumettesRestantesCalcul
}
// let nombreAllumettesrestantes = calculAllumettesRestantes(nombreAllumettesEnlevees)
console.log(calculAllumettesRestantes(nombreAllumettesEnlevees))

let nombreAllumettesrestantes = ALLUMETTESDEBASE
    while (nombreAllumettesrestantes >0){
        console.log("prout")
    let nombreAllumettesEnlevees = choixNbAllumettes()
    nombreAllumettesrestantes = calculAllumettesRestantes(nombreAllumettesEnlevees)
        if (nombreAllumettesrestantes <=0){
            alert("Gosh! You win!")
        }
    }