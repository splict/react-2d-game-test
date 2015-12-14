import React, { Component } from 'react'
import Scene from '../components/Scene'
import Options from '../components/options'

const containerStyles = {
  display: 'flex',
}
const mainPanelStyles = {
  flexShrink: 0,
}
const sidePanelStyles = {
  width: '300px',
  flexShrink: 0,
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div style={containerStyles}>
        <div style={mainPanelStyles}>
          <Scene planets={this.props.planets} />
        </div>
        <div style={sidePanelStyles}>
          <Options planets={this.props.planets} />
        </div>
      </div>
    )
  }
  static get defaultProps () {
    return {
      planets: [
        {x: 100, y: 100, name: 'Bad Planet'},
        {x: 375, y: 220, name: 'Good Planet One'},
        {x: 600, y: 360, name: 'Good Planet Two'},
      ],
    }
  }
}
