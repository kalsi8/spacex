import { combineReducers } from 'redux';
import launchFilter from './launchFilter/reducer';
import launchList from './launchList/reducer';

function createReducer(){
    return combineReducers({
        launchFilter,
        launchList
    })
}

export default createReducer;