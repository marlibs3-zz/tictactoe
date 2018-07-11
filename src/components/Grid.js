import React from 'react'
import Field from './Field'

const Grid = (props) => {

  return (
    <div className="grid">
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="1"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="2"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="3"
          winner={props.winner}
          onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="4"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="5"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="6"
          winner={props.winner}
          onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="7"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="8"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="9"
          winner={props.winner}
          onClick={props.handleFieldClick}/>
      </div>
    </div>

  )
}

export default Grid;