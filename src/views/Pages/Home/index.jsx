import React from 'react'
import LaunchFilter from './containers/LaunchFilter'
import LaunchList from './containers/LaunchList'
import './index.scss'


function Home({history}) {
    return (
        <div className='home_wrapper'>
            <div className='filter_wrapper'>
                <LaunchFilter/>
            </div>
            <div className='list_wrapper'>
                <LaunchList/>
            </div>
        </div>
    )
}

export default Home
