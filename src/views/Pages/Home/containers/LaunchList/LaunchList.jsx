import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import LaunchCard from '../../components/LaunchCard';
import './LaunchList.scss'
function LaunchList({fetchLaunches,launchYear,landSuccess,launchSuccess,launches}) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchLaunches(landSuccess,launchYear,launchSuccess).finally(() => {
            setLoading(false)
        })
    }, [launchYear,landSuccess,launchSuccess])
    return (
        <div className={'launch_list'}>
            {
                loading ? <div>loading</div>:
                !launches.length ? <div>no launch found</div>:
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

