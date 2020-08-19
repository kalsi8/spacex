import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import LaunchCard from '../../components/LaunchCard';
import './LaunchList.scss'
function LaunchList({fetchLaunches,launchYear,landSuccess,launchSuccess,launches}) {
    useEffect(() => {
        fetchLaunches(landSuccess,launchYear,launchSuccess);
    }, [launchYear,landSuccess,launchSuccess])
    return (
        <div className={'list_wrapper'}>
            {
                launches.map(({flight_number, mission_name,mission_id,launch_year,launch_success, links: {mission_patch_small}}) => {
                    return <LaunchCard
                            key={flight_number+mission_name}
                            flightNumber={flight_number}
                            missionId={mission_id}
                            missionName={mission_name}
                            launchYear={launch_year}
                            missionPatchSmall={mission_patch_small}
                            launchSuccess={launch_success} />
                })
            }
        </div>
    )
}

LaunchList.propTypes = {

}

export default LaunchList

