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
    this.state = {}
  }
  render() {
    const planets = this.props.planets.map(
      (planet, i) => (
        <Card key={i}>
          <CardHeader title={planet.name} />
          <CardText>
            <PlanetOptions {...planet} />
          </CardText>
        </Card>
      )
    )
    return (
      <div style={panelStyles} data-x="Y">
        {planets}
      </div>
    )
  }
}
