import Axios from 'axios';


const axiosInstance = Axios.create({
    baseURL: 'https://api.spacexdata.com/v3'
})


export default axiosInstance