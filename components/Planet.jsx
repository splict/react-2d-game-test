import React, { Component } from 'react'
import pixi from 'pixi.js'
import Sprite from './CenteredPivotSprite'
import raf from 'raf'

export default class Planet extends Component {
  constructor () {
    super()
    this.state = {
      rotation: Math.random() * 360,
    }
  }
  componentDidMount () {
    const tick = () => {
      this.setState({
        rotation: this.state.rotation + Math.PI * this.props.spinRate,
      })
      raf(tick)
    };
    tick();
  }
  render () {
    return (
      <Sprite ref="sprite"
        image={'/assets/planet.png'}
        x={this.props.x}
        y={this.props.y}
        rotation={this.state.rotation}
      />
    );
  }
  static get defaultProps () {
    return {
      x: 0,
      y: 0,
      spinRate: Math.random() / 200 + .006,
    }
  }
}
