import {UPDATE_LAUNCH_LIST } from './type'

const initialState = {
    launch_list: [],
}

const launchList  = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_LAUNCH_LIST:
            return { ...state, ...payload }
    default:
        return state
    }
}


export default launchList