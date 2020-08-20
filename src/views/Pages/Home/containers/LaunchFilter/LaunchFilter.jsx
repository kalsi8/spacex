import React from 'react'
import PropTypes from 'prop-types'
import FilterCard from '../../components/FilterCard'
import './LaunchFilter.scss'

const years = (function(start,end) {
    let result = []
    while(start <= end){
        result.push(start)
        start++;
    }
    return result
})(2006,2020)

function LaunchFilter({
    landSuccess,
    launchSuccess,
    launchYear,
    setLandSuccess,
    setLaunchSuccess,
    setLaunchYear
    }) {
    return (
        <div className={'filter'}>
            <h1>Filters:</h1>
            <FilterCard value={launchYear} filterName ="Launch Year" list={years} onChange={setLaunchYear}/>
            <FilterCard value={launchSuccess} filterName ="Sucessful Launch" list={['true','false']} onChange={setLaunchSuccess}/>
            <FilterCard value={landSuccess} filterName ="Sucessful Lending" list={['true','false']} onChange={setLandSuccess}/>
        </div>
    )
}

LaunchFilter.propTypes = {
    landSuccess: PropTypes.string.isRequired,
    launchSuccess: PropTypes.string.isRequired,
    launchYear: PropTypes.string.isRequired,
    setLandSuccess: PropTypes.func.isRequired,
    setLaunchSuccess: PropTypes.func.isRequired,
    setLaunchYear: PropTypes.func.isRequired
}

export default LaunchFilter
 
