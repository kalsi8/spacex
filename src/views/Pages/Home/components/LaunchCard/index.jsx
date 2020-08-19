import React from 'react'
import './index.scss'

function LaunchCard({flightNumber, missionId, missionName, launchYear, launchSuccess, missionPatchSmall}) {
    return (
        <div className={'launch_card'} key={missionId}>
            <img className={'launch_card-image'} src={missionPatchSmall} alt={"Image not found"}/>
            <div className ={'launch_card-content'}>
                <div className ={'launch_card-content-titel'}>
                    {`${missionName} #${flightNumber}`}
                </div>
                <div className ={'launch_card-content-label'}>
                    Mission Ids:
                </div>
                <ul className={'launch_card-content-value'}>
                    {
                        missionId.map(id => <li key={id}>{id}</li>)
                    }
                </ul>
                <div className ={'launch_card-content-label'}>
                    Launch Year: <span className={'launch_card-content-value'}>{launchYear}</span>
                </div>
                <div className ={'launch_card-content-label'}>
                    Sucessful Launch: <span className={'launch_card-content-value'}>{String(launchSuccess)}</span>
                </div>
            </div>
        </div>
    )
}


export default LaunchCard

