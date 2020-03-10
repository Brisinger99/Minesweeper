import React, {Component} from 'react';
import Box from './box';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: this.setUp()
        }
    }

    setUp = () => {
        let tempArray = Array(10).fill().map(n => Array(10).fill(0))
        return tempArray
    }



    boardFinish = (board) => {
        let finish = []
        for( let i = 0; i < board.length; i++){
        finish.push(board[i].map((value,index) => {return(
            <Box
                value = {value}
                index = {index}
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
