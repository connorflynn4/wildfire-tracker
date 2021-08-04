import {useState, React} from 'react'

const LocationInfoBox = ({ info }) => {

    const [show, setShow] = useState(false)

    return (
        
        <div className="location-info">
            {
            show?<h2>Event Location Info</h2>:null
            }
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
            <button onClick={()=>setShow(true)}>Show</button>
            <button onclick={()=>setShow(false)}>Hide</button>
        </div>


    )
}

export default LocationInfoBox
