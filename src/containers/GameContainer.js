import React, {Component} from 'react'
import Grid from '../components/Grid'

class GameContainer extends Component {

  constructor(props) {
    super(props)
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
        <Grid />
        <button onClick={this.resetGameContainer}>Restart</button>
      </div>
    )
  }

}

// <div className="buttons">
// <button onClick={this.undoMove}>Undo</button>
// <button onClick={this.resetGameContainer}>Restart</button>
// </div>
// <h2>{this.state.winner}</h2>
export default GameContainer;