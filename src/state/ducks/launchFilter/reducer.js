import { SET_LAND_SUCCESS, SET_LAUNCH_SUCCESS, SET_LAUNCH_YEAR } from "./type";

const initialState = {
    land_success: '',
    launch_year: '',
    launch_success: '',
}

const launchFilter  = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LAND_SUCCESS:
        case SET_LAUNCH_SUCCESS:
        case SET_LAUNCH_YEAR:
            return { ...state, ...payload }
    default:
        return state
    }
}


export default launchFilter