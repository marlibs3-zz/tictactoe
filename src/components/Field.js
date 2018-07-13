import React from 'react'

function Field(props){
  return (
    <div className={`field player${props.clickedBy ? props.clickedBy : ''}`} onClick={props.onClick}>
    </div>
  );
}

export default Field;