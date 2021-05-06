let myScore = 0;
let comScore = 0;

function computerPlay() {
	const randomMove = ['rock', 'paper', 'scisor']
  let randomNum = Math.floor(Math.random() * randomMove.length)
  return randomMove[randomNum]
}

function playRound(playerSelection, computerSelection) {
	let me = playerSelection.toLowerCase()
  let com = computerSelection.toLowerCase()
  let rock = () => {
  	if(com === 'paper') {
  			alert('You lose! Paper beats Rock')
        comScore += 1;
 	 	} else if(com === 'scisor') {
  			alert('You win! rock beats scisor')
        myScore += 1;
  	} else if(com === 'rock') {
  			alert('ops! match draw')
  	}
  }
  
  let paper = () => {
  	if(com === 'paper') {
  			alert('try again! match draw')
 	 	} else if(com === 'scisor') {
  			alert('paper beats scisor')
        myScore += 1;
  	} else if(com === 'rock') {
  			alert('paper beats rock')
        comScore += 1;
  	}
  }
  
  let scisor = () => {
  	if(com === 'paper') {
  			alert('scisor cuts paper')
        myScore += 1;
 	 	} else if(com === 'scisor') {
  			alert('match tied')
  	} else if(com === 'rock') {
  			alert('scisor can\'t cut rock')
        comScore += 1;
  	}
  }
  
  if(me === 'rock') {
  	return rock()
  } else if(me === 'paper') {
  	return paper()
  } else if(me === 'scisor') {
  	return scisor()
  } else {
  	return 'sorry that move is not recognized'
  }
}


function game() {
for(let i = 0; i < 5; i++) {
	playRound(prompt('input your move'), computerPlay())
}
  
if(myScore > comScore) {
	return 'you won'
} else if(comScore > myScore) {
	return 'you loose'
}
return 'match draw'
}