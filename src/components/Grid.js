import React, {Component} from 'react'
import Field from './Field'

class Grid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // This was refactored into a class to try to pass info to field so that undo could be implemented. That did not work.
    }
  }

  render() {
  
  return(
    <div className="grid">
      <div className="row">
        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="1"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>

        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="2"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>

        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="3"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="4"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>

        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="5"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>

        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="6"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="7"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>

        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="8"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>

        <Field
          currentPlayer={this.props.currentPlayer}
          fieldId="9"
          winner={this.props.winner}
          onClick={this.props.handleFieldClick}/>
      </div>
    </div>
  )
  }
}

export default Grid;