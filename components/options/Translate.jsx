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
      x: '0',
      y: '0',
    }
  }
  render() {
    return (
      <div style={componentStyles}>
        <TextField style={childStyles} hintText="x" name="x"
          onChange={this.onChangeX} value={this.props.x} />
        <TextField style={childStyles} hintText="y" name="y"
          onChange={this.onChangeY} value={this.props.y} />
      </div>
    )
  }
  onChangeX (event) {
    console.log('Value:', event.target.value)
    this.setState({
      x: event.target.value,
    })
  }
  onChangeY (event) {
    console.log('Value:', event.target.value)
    this.setState({
      y: event.target.value,
    })
  }
}
