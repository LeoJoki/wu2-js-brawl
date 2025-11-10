const playerName = "Jesus"
let playerHp = 50
let enemyHp = 50

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

const playerHpElement = document.querySelector("#player-hp")
const enemyHpElement = document.querySelector("#enemy-hp")

const combatLogElement = document.querySelector("#combat-log")

function log(msg) {
    const li = document.createElement("li")
    li.textContent = msg
    combatLogElement.appendChild(li)
    if (combatLogElement.childNodes.length > 10) {
        combatLogElement.removeChild(combatLogElement.firstChild)
    }
}

function gameEnd() {
    if (enemyHp <=  0){
        log("Spelaren har segrat över fienden!")
        playButton.removeEventListener("click", gameRound)
    }
    else if (playerHp <= 0) {
        log("Fienden har segrat över spelaren!")
        playButton.removeEventListener("click", gameRound)
    }
}

function gameRound() {
    const pRoll = rollDice()
    const eRoll = rollDice()
    if (pRoll > eRoll) {
        const damage = pRoll - eRoll
        log(`Du vinner med en ${pRoll}a mot fiendens ${eRoll}a. Fienden tar ${damage} skada!`)
        playerHp -= damage
    } else if (eRoll > pRoll) {
        const damage = eRoll - pRoll
        log(`Fienden vinner med en ${eRoll}a mot din ${pRoll}a. Du tar ${damage} skada!`)
        enemyHp -= damage
    } else {
        log("Snyggt parerat, inget händer!")
    }
    playerHpElement.textContent = playerHp
    enemyHpElement.textContent = enemyHp
    gameEnd()
}



const playButton = document.querySelector("#play-button")
playButton.addEventListener("click", gameRound)