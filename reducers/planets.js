const initialState = {
  planets: [
    {x: 100, y: 100, name: 'Bad Planet'},
    {x: 375, y: 220, name: 'Good Planet One'},
    {x: 600, y: 360, name: 'Good Planet Two'},
  ]
}

export default function planets(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
