import { TYPES } from '../constants/actionTypes';

const initialState = {
  user:null,
  roomName:null,
  description:null,
  date:null,
  time:null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      console.log('login', action.payload.user)
      return {
        ...state,
        user: action.payload.user,
      }
    case TYPES.LOGOUT:
      console.log('logout')
      return {
        ...state,
        user: null,
      }
    case TYPES.SET_MEETING_DETAILS:
      return {
        ...state,
          room:action.payload.data.room,
        description:action.payload.data.description,
      }
    case TYPES.SET_MEETING_TIMING:
      return {
        ...state,
        date:action.payload.data.date,
        time:action.payload.data.time,
      }
    case TYPES.CLEAR:
      return {
        ...state,
        date:null,
        time:null,
        room:null,
        description:null
      }
    default:
      return state;
  }
}

export default reducer;