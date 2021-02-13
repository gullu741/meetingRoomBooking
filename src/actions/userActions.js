import { TYPES } from '../constants/actionTypes';

export const ActionCreators = {
    clear : ()=>({type: TYPES.CLEAR}),
    setMeetingTimings: (data) => ({ type: TYPES.SET_MEETING_TIMING, payload: { data }}),
    setMeetingDetails: (data) => ({ type: TYPES.SET_MEETING_DETAILS, payload: { data }}),
    login: (user) => ({ type: TYPES.LOGIN, payload: { user } }),
    logOut: () => ({ type: TYPES.LOGOUT})
}