import React, { Component } from 'react'
const TextField = require('material-ui/lib/text-field')

const componentStyles = {
  display: 'flex',
}
const childStyles = {
  width: '50%',
}

export default class Translate extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0,
    }
  }
  render() {
    return (
      <div style={componentStyles}>
        <TextField style={childStyles} hintText="x" name="x"
          onChange={this.onChangeX.bind(this)} value={'' + this.props.x} />
        <TextField style={childStyles} hintText="y" name="y"
          onChange={this.onChangeY.bind(this)} value={'' + this.props.y} />
      </div>
    )
  }
  onChangeX (event) {
    const value = parseFloat(event.target.value)
    if ('' + value === event.target.value) {
      this.setState({
        x: value,
      })
      this.props.onChangeX(value)
    }
  }
  onChangeY (event) {
    const value = parseFloat(event.target.value)
    if ('' + value === event.target.value) {
      this.setState({
        y: value,
      })
      this.props.onChangeY(value)
    }
  }
}
