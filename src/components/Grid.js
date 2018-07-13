import React, {Component} from 'react'
import Field from './Field'

class Grid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 1,
      currentPlayerEmoji: "🐹",
      turn: 1,
      winner: null,
      fields: Array(9).fill(null),
      lastClicked: null,
    }

    this.handleClick = this.handleClick.bind(this)
    this.undoLastMove = this.undoLastMove.bind(this)
  }

  swapPlayer() {
    if (this.state.currentPlayer === 1) {
      this.setState({currentPlayer: 2, currentPlayerEmoji: "🐰"})
    } else {
      this.setState({currentPlayer: 1, currentPlayerEmoji: "🐹"})
    }
  }

  reduceTurn() {
    const reducedTurn = this.state.turn - 1
    this.setState({turn: reducedTurn})
  }
 
  undoLastMove() {
    const sliced = this.state.fields.slice();
    sliced[this.state.lastClicked] = null
    this.setState({fields: sliced})

    this.swapPlayer()

    this.reduceTurn()

  }

  calculateWinner(fields) {
    const comb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < comb.length; i++) {
      const [a, b, c] = comb[i];
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
        return fields[a];
      }
    }
  }

  declareWinner() {
    this.setState({winner: `${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji} Player ${this.state.currentPlayer} wins! ${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji} ${this.state.currentPlayerEmoji}`});
  }

  handleClick(i) {
    this.setState({
      lastClicked: i,
    });
    // if there is no winner
    if (!this.state.winner) {
      // take a copy of the current state of the game
      const sliced = this.state.fields.slice();
      // if this field hasn't been clicked before
      if (!sliced[i]) {
        // set the field to be that of the current player
        sliced[i] = this.state.currentPlayer;
        // update the state and increment the count
        this.setState({
          fields: sliced,
          turn: this.state.turn + 1
        });

        // check if this is a winning play
        if (this.calculateWinner(sliced)) {
          this.declareWinner()
        } else {
        this.swapPlayer()
        }
      }
    }
  }

  renderField(i) {
    return (
      <Field
        clickedBy={this.state.fields[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  resetGameContainer() {
    window.location.reload()
  }

  render() {
  
  return(
    <div className="game-center-class">
    <h2>Player {this.state.currentPlayer}'s turn {this.state.currentPlayerEmoji}</h2>
    <div className="game-grid">
      <div className="grid">
        <div className="row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
        </div>
        <div className="row">
          {this.renderField(3)}
          {this.renderField(4)}
          {this.renderField(5)}
        </div>
        <div className="row">
          {this.renderField(6)}
          {this.renderField(7)}
          {this.renderField(8)}
        </div>
      </div>
    </div>
    <div className="button-row">
    <button onClick={this.undoLastMove}>Undo</button>
    <button onClick={this.resetGameContainer}>Restart</button>
    </div>
    <h2>{this.state.winner}</h2>
    </div>
  )
  }
  
}

export default Grid;