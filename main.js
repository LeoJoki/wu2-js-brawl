const playerName = "Jesus"
let playerHp = 10
let enemyHp = 10

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

const playerHpElement = document.querySelector("#player-hp")
const enemyHpElement = document.querySelector("#enemy-hp")

function gameEnd() {
    if (enemyHp <=  0){
        console.log("Spelaren har segrat över fienden!")
        playButton.removeEventListener("click", gameRound)
    }
    else if (playerHp <= 0) {
        console.log("Fienden har segrat över spelaren!")
        playButton.removeEventListener("click", gameRound)
    }
}

function gameRound() {
    const pRoll = rollDice()
    const eRoll = rollDice()
    if (pRoll > eRoll) {
        const damage = pRoll - eRoll
        console.log(`Du vinner med en ${pRoll}a mot fiendens ${eRoll}a. Fienden tar ${damage} skada!`)
        playerHp -= damage
    } else if (eRoll > pRoll) {
        const damage = eRoll - pRoll
        console.log(`Fienden vinner med en ${eRoll}a mot din ${pRoll}a. Du tar ${damage} skada!`)
        enemyHp -= damage
    } else {
        console.log("Snyggt parerat, inget händer!")
    }
    playerHpElement.textContent = playerHp
    enemyHpElement.textContent = enemyHp
    gameEnd()
}



const playButton = document.querySelector("#play-button")
playButton.addEventListener("click", gameRound)