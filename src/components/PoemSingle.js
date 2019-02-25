import React from 'react'
import './PoemSingle.css'

const PoemSingle = props => (
    <div className ="PoemSingle">
          <p>{props.date}</p>
          <p className="poem">{props.poem}</p>
          <p>{props.deviceName}</p>
    </div>
)

export default PoemSingle