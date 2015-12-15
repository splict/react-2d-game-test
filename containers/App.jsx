import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Scene from '../components/Scene'
import Options from '../components/options'
import * as PlanetActions from '../actions/planets'

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

class App extends Component {
  constructor () {
    super()
  }
  render () {
    const { planets, actions } = this.props
    return (
      <div style={containerStyles}>
        <div style={mainPanelStyles}>
          <Scene planets={planets} />
        </div>
        <div style={sidePanelStyles}>
          <Options planets={planets}
            editPlanetX={actions.editPlanetX}
            editPlanetY={actions.editPlanetY}
          />
        </div>
      </div>
    )
  }
  static get defaultProps () {
    return {
      planets: [],
    }
  }
}

function select(state) {
  return {
    planets: state.planets,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlanetActions, dispatch)
  }
}

export default connect(select, mapDispatchToProps)(App)
