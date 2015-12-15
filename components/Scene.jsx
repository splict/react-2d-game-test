import React, { Component } from 'react'
import pixi from 'pixi.js'
import {Stage, Sprite, VectorText} from 'react-pixi'
import raf from 'raf'
import Planet from './Planet'

export default class Scene extends Component {
  constructor () {
    super()
  }
  render () {
    const planets = this.props.planets.map((planet, i) => (
      <Planet {...planet} key={planet.id} />
    ))
    return (
        <Stage width={800} height={450} backgroundcolor={0x000000}>
          {planets}
        </Stage>
    );
  }
  static get defaultProps () {
    return {
      planets: [],
    }
  }
}
