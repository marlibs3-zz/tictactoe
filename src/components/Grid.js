import React from 'react'
import Field from './Field'

const Grid = (props) => {

  return (
    <div className="grid">
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="1"
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="2"
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="3"
          onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="4"
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="5"
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="6"
          onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="7"
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="8"
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="9"
          onClick={props.handleFieldClick}/>
      </div>
    </div>

  )
}

export default Grid;