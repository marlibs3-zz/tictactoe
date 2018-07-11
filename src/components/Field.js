import React, {Component} from 'react'


class Field extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player: ''
    }

    this.handleFieldValue = this.handleFieldValue.bind(this)
  }

  handleFieldValue() {
    const position = {
      fieldId: this.props.fieldId,
      player: this.props.currentPlayer
    }

    if (this.state.player === '') {
      this.setState({player: 'player' + this.props.currentPlayer})
      this.props.onClick(position);
    }
  }

  render() {

    return (
      <div className={`field ${this.state.player}`} onClick={this.handleFieldValue}>

      </div>

    )
  }

}


export default Field