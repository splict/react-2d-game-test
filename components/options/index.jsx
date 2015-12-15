import React, { Component } from 'react'
const Card = require('material-ui/lib/card/card')
const CardText = require('material-ui/lib/card/card-text')
const CardHeader = require('material-ui/lib/card/card-header')

const PlanetOptions = require('./PlanetOptions')

const panelStyles = {
  padding: '20px',
}

export default class Options extends Component {
  constructor() {
    super()
  }
  render() {
    const planets = this.props.planets.map(
      (planet) => (
        <Card key={planet.id}>
          <CardHeader title={planet.name} />
          <CardText>
            <PlanetOptions {...planet}
              onChangeX={this.onChangeX.bind(this)}
              onChangeY={this.onChangeY.bind(this)}
            />
          </CardText>
        </Card>
      )
    )
    return (
      <div style={panelStyles}>
        {planets}
      </div>
    )
  }
  onChangeX (id, x) {
    this.props.editPlanetX(id, x)
  }
  onChangeY (id, y) {
    this.props.editPlanetY(id, y)
  }
}
