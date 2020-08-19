import { getLaunches } from "./service"
import { UPDATE_LAUNCH_LIST } from "./type"




const fetchLaunches = (
                    land_success,
                    launch_year,
                    launch_success
                    ) => async dispatch => {
    const list = await getLaunches({land_success,
        launch_year,
        launch_success,
    limit:100})
    dispatch({
        type: UPDATE_LAUNCH_LIST,
        payload:{list}
    })
}


export {
    fetchLaunches,
}
