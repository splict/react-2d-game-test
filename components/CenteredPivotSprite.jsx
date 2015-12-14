import React, { Component } from 'react'
import pixi, { Point } from 'pixi.js'
import { Sprite } from 'react-pixi'
import raf from 'raf'

export default class CenteredPivotSprite extends Component {
  constructor () {
    super()
  }
  componentDidMount () {
    const sprite = this.refs.sprite
    let isSet = false
    const tick = () => {
      const isLoaded = sprite.width > 1
      if (isLoaded && !isSet) {
        sprite.pivot = new Point(sprite.width / 2, sprite.height / 2)
        isSet = true
      } else {
        raf(tick)
      }
    };
    tick();
  }
  render () {
    return <Sprite {...this.props} ref="sprite" />
  }
}
