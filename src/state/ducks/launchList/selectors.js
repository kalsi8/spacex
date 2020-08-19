import { get } from 'lodash'


const selectLaunches = state => get(state,'launchList.list',[])

export {
    selectLaunches
}