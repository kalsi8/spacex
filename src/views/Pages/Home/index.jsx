import React from 'react'
import LaunchFilter from './containers/LaunchFilter'
import LaunchList from './containers/LaunchList'

function Home({history}) {
    return (
        <div className='container'>
            <LaunchFilter/>
            <LaunchList/>
        </div>
    )
}

export default Home
