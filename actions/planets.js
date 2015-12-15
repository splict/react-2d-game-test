import * as types from '../constants/ActionTypes'

export function addPlanet(name) {
  return { type: types.ADD_PLANET, name }
}


export function editPlanetX(id, x) {
  return { type: types.EDIT_PLANET_X, id, x }
}


export function editPlanetY(id, y) {
  return { type: types.EDIT_PLANET_Y, id, y }
}


export function editPlanetName(id, name) {
  return { type: types.EDIT_PLANET_NAME, id, name }
}
