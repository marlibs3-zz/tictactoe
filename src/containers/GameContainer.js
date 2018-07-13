import React, {Component} from 'react'
import Grid from '../components/Grid'

class GameContainer extends Component {

  render() {
    return (
      <div className="game-container">
        <h1><a href="/index">Tic Tac Toe</a></h1>
        <Grid />
      </div>
    )
  }
  
}

export default GameContainer;