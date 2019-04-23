const initialState = {
  wData : []
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'GET_WEATHER':
      return {...state, wData: action.payload}
    default:
      return state
  }
}