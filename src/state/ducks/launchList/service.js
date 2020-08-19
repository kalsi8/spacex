import axiosInstance from '../../../utils/axiosInstance'
import URL from '../../../utils/apiConfg'

async function getLaunches(params) {
    const {data} = await axiosInstance.get(URL.launches.fetchLaunches,{params})
    return data
}



export {
    getLaunches
}

