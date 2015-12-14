import React, { Component } from 'react'
const Translate = require('./Translate')

export default class PlanetOptions extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Translate x={this.props.x} y={this.props.y} />
      </div>
    )
  }
  static get defaultProps () {
    return {
      x: 0,
      y: 0,
    }
  }
}
