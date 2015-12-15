
import { EDIT_PLANET_X, EDIT_PLANET_Y } from '../constants/ActionTypes'

const initialState = []

export default function planets(state = initialState, action) {
  switch (action.type) {
    case EDIT_PLANET_X:
      return state.map(planet =>
        (planet.id === action.id)
          ? Object.assign({}, planet, { x: action.x })
          : planet
      )
    case EDIT_PLANET_Y:
      return state.map(planet =>
        (planet.id === action.id)
          ? Object.assign({}, planet, { y: action.y })
          : planet
      )
    default:
      return state
  }
}
