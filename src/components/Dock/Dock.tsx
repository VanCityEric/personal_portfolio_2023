import React, { Fragment } from 'react'
import './dock.css'

const Dock = () => {
  return (
    <Fragment>
      <div id="dock-container">
        <div id="dock">
          <figure className="icon"></figure>
          <figure className="icon"></figure>
          <figure className="icon"></figure>
          <figure className="icon"></figure>
        </div>
      </div>
    </Fragment>
  )
}

export default Dock