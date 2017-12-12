// All code should be written in this file.
//setPlayer = undefined;
var playerOneMoveOneType = undefined;
var playerOneMoveTwoType = undefined;
var playerOneMoveThreeType = undefined;
var playerTwoMoveOneType = undefined;
var playerTwoMoveTwoType = undefined;
var playerTwoMoveThreeType = undefined;
var playerOneMoveOneValue = undefined;
var playerOneMoveTwoValue = undefined;
var playerOneMoveThreeValue = undefined;
var playerTwoMoveOneValue = undefined;
var playerTwoMoveTwoValue = undefined;
var playerTwoMoveThreeValue = undefined;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
	//console.log("Setting player moves");
	//console.log("this is moveTwoType " + moveTwoType);
	//console.log("this is moveOneType" + moveOneType);
	//console.log("this is moveThreeType " + moveThreeType);

	if (!moveOneType || !moveTwoType || !moveThreeType) {
		
		return null;
	}

	if (!moveOneValue || !moveTwoValue || !moveThreeValue) {
		
		return null;
	} 

	if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
		return null;
	}

	if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) {
		return null;
	}

	var total = moveOneValue + moveTwoValue + moveThreeValue;

	if (total > 99) {
		return null;
	}

	
	if (player === 'Player One') {

	playerOneMoveOneType = moveOneType;
	playerOneMoveOneValue = moveOneValue;
	playerOneMoveTwoType = moveTwoType;
	playerOneMoveTwoValue = moveTwoValue;
	playerOneMoveThreeType = moveThreeType;
	playerOneMoveThreeValue = moveThreeValue;
} else if (player === 'Player Two') {
	playerTwoMoveOneType = moveOneType;
	playerTwoMoveOneValue = moveOneValue;
	playerTwoMoveTwoType = moveTwoType;
	playerTwoMoveTwoValue = moveTwoValue;
	playerTwoMoveThreeType = moveThreeType;
	playerTwoMoveThreeValue = moveThreeValue;

}

//console.log('This is player 2 ' + playerTwoMoveOneType);

}

const getRoundWinner = (roundNumber) => {

	if (playerOneMoveOneType === 'rock') {
	 	console.log("testing");
    	if (playerTwoMoveOneType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
	
	console.log('this is player 1 getround ' + playerOneMoveOneType);

	//console.log("round winner " + roundNumber + ' ' + playerOneMoveOneType );


	if (roundNumber != 1 || 2 || 3 ) {
		return null;
	}

	 // if (playerOneMoveOneType === 'rock') {
	 // 	console.log("testing");
  //   	if (playerTwoMoveOneType === 'scissors') {
  //     return 'Player One';
  //   } else {
  //     return 'Player Two';
  //   }
  // }
	}

const getGameWinner = () => {

console.log("get game winner");


}

const setComputerMoves = () => {

}
