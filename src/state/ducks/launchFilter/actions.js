import { SET_LAND_SUCCESS, SET_LAUNCH_SUCCESS, SET_LAUNCH_YEAR } from "./type";




const setLaunchYear = (launch_year) => ({
    type: SET_LAUNCH_YEAR,
    payload: {launch_year}
})



const setLandSuccess = (land_success) => ({
    type: SET_LAND_SUCCESS,
    payload: {land_success}
})

const setLaunchSuccess = (launch_success) => ({
    type: SET_LAUNCH_SUCCESS,
    payload: {launch_success}
})

export {
    setLaunchYear,
    setLandSuccess,
    setLaunchSuccess
}
