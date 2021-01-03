import {useState} from 'react';
import LoacationForm from './LocationForm';

export default function LocationCard ({location}) {
    const [editShow, setEditShow] = useState(false);

    return <>
    <div className="location-card">
        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
        <div className="address"><span>{location.address1}</span>
        {(location.address2)?<span className="address2">{location.address2}</span>:""}</div>
        <div className="city-state"><span>{location.city},</span><span>{location.State.abb}</span></div>
        <div className="zip">{location.zip}</div>
        <div className="controls"><button><i className="fas fa-edit" onClick={()=>{setEditShow(!editShow)}} ></i></button></div>
    </div>
    {editShow && <LoacationForm location={location} type="edit" closeForm={setEditShow} />}
    </>
}