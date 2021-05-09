/* this value is changing dyanmically */

let userScore = 0;
let compScore = 0;

/*player name updating after taking input*/

const playerName = document.querySelector('#player_name')
const playerName1 = document.querySelector('.player_name1')
const nameValue = document.querySelector('#name_value')

function updateName(e) {
    playerName.textContent = `${e.target.value}`
    playerName1.textContent = `${e.target.value}`
}
nameValue.addEventListener('input', updateName)

/* game will start after clicking any of three icons */

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const computerRock = document.querySelector('#computer-rock')
const computerPaper = document.querySelector('#computer-paper')
const computerScissor = document.querySelector('#computer-scissor')
const myPointsElem = document.querySelector('.player_p')
const compPointsElem = document.querySelector('.comp_p')
const quotes = document.querySelector('.quotes')

let userMove; // i think i don't need it

/* randomly generating game moves */

function compMove() {
	const randomMove = ['rock', 'paper', 'scissor']
    let randomNum = Math.floor(Math.random() * randomMove.length)
  return randomMove[randomNum]
}

/*page manipulation */

const start = document.querySelector('.start')
const frontPage = document.querySelector('.front_page')
const gamePage = document.querySelector('.game_page')
const backPage = document.querySelector('.back_page')
const playAgain = document.querySelector('.play_again')
const arrowLeft = document.querySelector('.home')
const homeIcon = document.querySelector('.home_icon')
const winOrLoss = document.querySelector('.win_or_loss')

/* when i clicking play button */
function frontToGame() {
    frontPage.classList.add('invisible')
    gamePage.classList.replace('invisible', 'visible_game')
}

/* when i clicking home Image */
function GameToFront() {
    gamePage.classList.replace('visible_game', 'invisible')
    frontPage.classList.remove('invisible', 'visible')
}

/* when the game finished */
function gameToBack() {
    if(userScore >= 5 || compScore >= 5) {
        userScore = 0;
        compScore = 0;
        
        gamePage.classList.replace('visible_game', 'invisible')
        backPage.classList.replace('invisible', 'visible')
    }
}

/*when i clicking the play Again button */
function backtoGame() {
    backPage.classList.replace('visible', 'invisible')
    gamePage.classList.replace('invisible', 'visible_game')
    quotes.textContent = '';
}

/* when i clicking the home image */
function backToHome() {
    frontPage.classList.replace('invisible', 'visible')
    backPage.classList.replace('visible', 'invisible')
    quotes.textContent = '';
}

/* after finishing game showing who win */
function backText() {
    if(userScore >= 5) {
        if(playerName.textContent === 'YOU') {
            winOrLoss.textContent = 'You won this round.😃😃😃'
        } else {
            winOrLoss.textContent =  `${playerName.textContent}! You won this round.😃😃😃`
        }  
    } else if(compScore >= 5) {
        winOrLoss.textContent = `Computer won this round. Try again.😢😢😢`
    }
}


start.addEventListener('click', frontToGame)
arrowLeft.addEventListener('click', GameToFront)
playAgain.addEventListener('click', backtoGame)
homeIcon.addEventListener('click', backToHome)

/* game play */

/* i have to remove animations unless the animations will only happen once */

function removeAnimation() {
    rock.classList.remove('player_rock_animation')
    paper.classList.remove('player_paper_animation')
    scissor.classList.remove('player_scissor_animation')

    if(computerPaper.classList.contains('computer_paper_animation')) {
        computerPaper.classList.remove('computer_paper_animation')
    }

    if(computerRock.classList.contains('computer_rock_animation')) computerRock.classList.remove('computer_rock_animation')

    if(computerScissor.classList.contains('computer_scissor_animation')) computerScissor.classList.remove('computer_scissor_animation')

    if(quotes.classList.contains('quotes_animation')) quotes.classList.remove('quotes_animation')
}


/* when i clicking rock icon */
function rocks() {
    let rockMove = compMove()
    switch(rockMove) {
        case 'scissor': 
            userScore += 1
            quotes.textContent = 'You win! rock breaks scissor'
            computerScissor.classList.add('computer_scissor_animation')
            break
        case 'paper':
            compScore += 1
            quotes.textContent = 'You lose! paper holds rock'
            computerPaper.classList.add('computer_paper_animation')
            break
        default:
            quotes.textContent = 'ops! match draw. Try again'
            computerRock.classList.add('computer_rock_animation')
    }
    rock.classList.add('player_rock_animation')
    quotes.classList.add('quotes_animation')
    setTimeout(removeAnimation, 1500)
}

/* when i clicking paper icon */
function papers() {
    let paperMove = compMove()
    switch(paperMove) {
        case 'scissor':
            compScore += 1
            quotes.textContent = 'You lose! scissor cuts paper'
            computerScissor.classList.add('computer_scissor_animation')
            break
        case 'rock':
            userScore += 1;
            quotes.textContent = 'You win! paper holds rock'
            computerRock.classList.add('computer_rock_animation')
            break
        default:
            quotes.textContent= 'ops! match draw. Try again'
            computerPaper.classList.add('computer_paper_animation')
    }
    paper.classList.add('player_paper_animation')
    quotes.classList.add('quotes_animation')
    setTimeout(removeAnimation, 1500)
}

/* when i clicking scissor icon */
function scissors() {
    let scissorsMove = compMove()
    switch(scissorsMove) {
        case 'rock':
            compScore += 1
            quotes.textContent = 'You lose! scissor can\'t cut rock'
            computerRock.classList.add('computer_rock_animation')
            break
        case 'paper':
            userScore += 1
            quotes.textContent = 'You win! scissor cuts paper'
            computerPaper.classList.add('computer_paper_animation')
            break
        default:
            quotes.textContent= 'ops! match draw. Try again'
            computerScissor.classList.add('computer_scissor_animation')
    }
    scissor.classList.add('player_scissor_animation')
    quotes.classList.add('quotes_animation')
    setTimeout(removeAnimation, 1500)
}


rock.addEventListener('click', () => {
    userMove = 'rock';
    rocks()
    backText()
    gameToBack()
    myPointsElem.textContent = userScore
    compPointsElem.textContent = compScore
    
})
    
paper.addEventListener('click', () => {
    userMove = 'paper'
    papers()
    backText()
    gameToBack()
    myPointsElem.textContent = userScore
    compPointsElem.textContent = compScore
})
    
scissor.addEventListener('click', () => {
    userMove = 'scissor'
    scissors()
    backText()
    gameToBack()
    myPointsElem.textContent = userScore
    compPointsElem.textContent = compScore
})


