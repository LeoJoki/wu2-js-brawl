const playerName = "Jesus"
let playerHp = 100
let enemyHp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

console.log(rollDice())

let pRoll = rollDice
let eRoll = rollDice

function gameRound() {
    if (pRoll > eRoll) {
        const damage = pRoll - eRoll
        console.log("Du vinner med en ${pRoll}a mot fiendens ${eRoll}a. Fienden tar ${damage} skada!")
        enemyHp - damage
    } else if (eRoll > pRoll) {
        const damage = eRoll - pRoll
        console.log("Fienden vinner med en " (eRoll), "a mot din" (pRoll), "a. Du tar" (damage), "skada!")
        enemyHp - damage
    } else {
        console.log("Snyggt parerat, inget händer!")
    }
}

gameRound()