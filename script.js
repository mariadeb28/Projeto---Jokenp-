const result = document.querySelector(".result")
const humanScore = document.querySelector("#humanScore")
const beastScore = document.querySelector("#beastScore")

let humanScoreNumber = 0
let beastScoreNumber = 0



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playBeast())

}

const playBeast = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, beast) => {
    console.log('Human: ' + human + 'Beast: ' + beast)

    if (human === beast) {
        result.innerHTML = "Draw in the game!&#x1F0CF;"

    } else if (
        human === 'paper' && beast === 'rock' ||
        human === 'rock' && beast === 'scissors' ||
        human === 'scissors' && beast === 'paper')
        {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = "Human won! &#x1F52E;"

    } else {

        beastScoreNumber++
        beastScore.innerHTML = beastScoreNumber
        result.innerHTML = "Beast won! &#x1F432;"
    }

}