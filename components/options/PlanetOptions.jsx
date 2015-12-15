import React, { Component } from 'react'
const Translate = require('./Translate')

export default class PlanetOptions extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Translate x={this.props.x} y={this.props.y}
          onChangeX={this.onChangeX.bind(this)}
          onChangeY={this.onChangeY.bind(this)}
        />
      </div>
    )
  }
  onChangeX (x) {
    this.props.onChangeX(this.props.id, x)
  }
  onChangeY (y) {
    this.props.onChangeY(this.props.id, y)
  }
  static get defaultProps () {
    return {
      x: 0,
      y: 0,
    }
  }
}
