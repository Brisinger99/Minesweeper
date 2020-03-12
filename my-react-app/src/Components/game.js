import React, {Component} from 'react';
import Box from './box';

class Game extends Component {
    constructor(props) {
        super(props)
        this.bombs = 30
        this.state = {
            board: this.setUp()
        }
    }

    setUp = () => {
        let gameBoard = Array(10).fill().map(n => Array(10).fill(0))
        console.log(gameBoard);
        gameBoard = this.bombPlace(gameBoard)
        return gameBoard
    }

    bombPlace = (gameBoard) => {
        for (let i = 0; i < this.bombs; i++) {
            let vertical = Math.floor(Math.random()*gameBoard.length)
            let horizontal = Math.floor(Math.random()*gameBoard.length)
            if (gameBoard[vertical][horizontal] < 9 ) {
                gameBoard[vertical][horizontal] = 9
                if (typeof(gameBoard[vertical][horizontal+1]) === "number"){
                    gameBoard[vertical][horizontal+1] += 1
                }
                if (typeof(gameBoard[vertical][horizontal-1]) === "number"){
                    gameBoard[vertical][horizontal-1] += 1
                }
                //-------------------------------------------
                if (typeof(gameBoard[vertical+1]) !== "undefined"){
                    if (typeof(gameBoard[vertical+1][horizontal]) === "number" ){
                    gameBoard[vertical+1][horizontal] += 1
                    }
                    if (typeof(gameBoard[vertical+1][horizontal+1]) === "number"){
                        gameBoard[vertical+1][horizontal+1] += 1
                    }
                    if (typeof(gameBoard[vertical+1][horizontal-1]) === "number"){
                        gameBoard[vertical+1][horizontal-1] += 1
                }}
                if (typeof(gameBoard[vertical-1]) !== "undefined"){
                    if (typeof(gameBoard[vertical-1][horizontal-1]) === "number"){
                        gameBoard[vertical-1][horizontal-1] += 1
                    }
                    if (typeof(gameBoard[vertical-1][horizontal+1]) === "number"){
                        gameBoard[vertical-1][horizontal+1] += 1
                    }
                    if (typeof(gameBoard[vertical-1][horizontal]) === "number"){
                        gameBoard[vertical-1][horizontal] += 1
                }}
            } else {
                i--
            }
        } for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard.length; j++) {
                if (gameBoard[i][j] > 8){
                    gameBoard[i][j] = 9
                }
            }
        }
        return gameBoard
    }



    boardFinish = (board) => {
        let finish = []
        for( let i = 0; i < board.length; i++){
        finish.push(board[i].map((value,index) => {return(
            <Box
                value = {value}
                index2 = {index}
                index1 = {i}
                gameBoard = {board}
            />)}
        ));
    }
    return finish
}


    render(){
        let start = this.boardFinish(this.state.board)
  return (
    <div className = "board">
        {start}
    </div>
)}
}
export default Game;
