import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Player1: "X",
      Player2: "0",
    turn: "X",
      board: [ "", "", "", "", "", "", "", "", "" ],
      winner: null,
    }
  }

  handleClick(i) {
    if(this.state.board[i] === "" && !this.state.winner) {
      this.state.board[i] = this.state.turn
      this.setState({
        board: this.state.board,
        turn: this.state.turn === this.state.Player1 ? this.state.Player2 : this.state.Player1,
        winner: this.checkWinner(),
      })
    }
  }

  checkWinner() {
    var turn = this.state.turn
    var symbols = this.state.board
    var moves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return moves.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return turn
      } else {
        return false
      }
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1>TicTacToe Game</h1>
        <div className="board">
        {this.state.board.map((cell, i) => {
          return <div key={i} onClick={() => this.handleClick(i)} className="square">{cell}</div>;
        })}
        </div>
        {this.state.winner ? <h2 className="winner">{`The final winner: ${this.state.winner}`}</h2> : null}
      </div>
    )
  }
}

export default App;