import React, {Component} from 'react'
import Grid from '../components/Grid'

class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 1,
      currentPlayerEmoji: "🐹",
      clickedFields: [],
      turn: 1,
      winner: null,
    }

    this.handleFieldClick = this.handleFieldClick.bind(this)
  }

  swapPlayer() {
    if (this.state.currentPlayer === 1) {
      this.setState({currentPlayer: 2, currentPlayerEmoji: "🐰"})
    } else {
      this.setState({currentPlayer: 1, currentPlayerEmoji: "🐹"})
    }
  }

  recordFieldClick(position) {
    const newClick = {
      player: this.state.currentPlayer,
      fieldId: position.fieldId,
    }

    const newClickedFields = this.state.clickedFields.concat([newClick])

    this.setState( {
      clickedFields: newClickedFields,
      turn: this.state.turn + 1
    })

    if (this.state.turn >= 5) {
      this.checkForWinner(newClick)
    } 
  }

  checkForWinner(lastClick) {
    const winningCombinations = [
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "5", "9"],
      ["3", "5", "7"],
    ]
    const currentPlayerFields = this.state.clickedFields.filter((field) => {
      return field.player === this.state.currentPlayer
    })

    currentPlayerFields.push(lastClick)
    const newCurrentPlayerFields = currentPlayerFields.map((field) => {
      return field.fieldId
    })


    winningCombinations.forEach((combination) => {
      const winner = combination.every((winningField) => {
        return newCurrentPlayerFields.includes(winningField)
      })
      if (winner) {
        this.setState({winner: `${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji} Player ${this.state.currentPlayer} wins! ${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji}`});
      }
    })
  }


  handleFieldClick(position) {

    if (this.state.winner === null) {
      this.recordFieldClick(position)
      this.swapPlayer()
    }

  }

  undoMove() {
    
    // clear ownership of field
    // swap turn
    // -1 from turn counter
    // delete last item from clicked fields
    }

  resetGameContainer() {
    window.location.reload()
  }

  render() {
    return (
      <div className="game-container">
        <h1><a href="/index">Tic Tac Toe</a></h1>
        <h2>Player {this.state.currentPlayer}'s turn {this.state.currentPlayerEmoji}</h2>
        <div className="game-grid"><Grid
          currentPlayer={this.state.currentPlayer}
          handleFieldClick={this.handleFieldClick}
          winner={this.state.winner}
        />
        </div>
        <div className="buttons">
        <button onClick={this.undoMove}>Undo</button>
        <button onClick={this.resetGameContainer}>Restart</button>
        </div>
        <h2>{this.state.winner}</h2>
      </div>

    )
  }

}

export default GameContainer;