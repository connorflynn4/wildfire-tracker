import {useState, React} from 'react'

const LocationInfoBox = ({ info }) => {

    return (
        
        <div className="location-info">
            {
            show?<h2>Event Location Info</h2>:null
            }
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
            
        </div>


    )
}

export default LocationInfoBox
