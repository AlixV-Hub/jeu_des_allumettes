const BASE = 50

function choixUser () {
    let nbUser = 0
    nbUser = Number(prompt("Choisir un nombre d'allumettes entre 1 et 6"))
    while (!(nbUser > 0 && nbUser < 7)) {
        nbUser = Number(prompt("Oups! un nombre d'allumettes entre 1 et 6"))
    }
    return nbUser
}
// nbUser = choixUser()
// choixUser()

function calRestant(nbUser) {
    console.log("Nous devons enlever "+ nbUser + " allumettes.")
    let alRestantes = BASE - nbUser
     return alRestantes
 }
// alRestantes = calRestant(nbUser)
// calRestant(nbUser)

function gamePlay(){
let alEnJeu = BASE
    while (alEnJeu >0){
        if (alEnJeu <=0){
            alert("Gosh! You win!")
        } else {
        console.log("prout")
        let nmbUser = choixUser()
        let allRestantes = calRestant(nmbUser)
        }
    }
}
gamePlay()