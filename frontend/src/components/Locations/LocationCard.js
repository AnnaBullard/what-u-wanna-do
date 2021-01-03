import {useState} from 'react';
import {useDispatch} from 'react-redux';
import LoacationForm from './LocationForm';
import {deleteLocation} from '../../store/locations';

export default function LocationCard ({location}) {
    const dispatch = useDispatch()
    const [editShow, setEditShow] = useState(false);
    const googleMapSearch = "https://www.google.com/maps/search/"+(location.address1+" "+location.city+" "+location.State.abb+" "+location.zip).replace(/\s+/g,"%20")

    return <>
    <div className="location-card">
        <div className="icon">
            <a href={googleMapSearch} target="blank">
               <i className="fas fa-map-marker-alt"></i> 
            </a>
        </div>
        <div className="address"><span>{location.address1}</span>
        {(location.address2)?<span className="address2">{location.address2}</span>:""}</div>
        <div className="city-state"><span>{location.city},</span><span>{location.State.abb}</span></div>
        <div className="zip">{location.zip}</div>
        <div className="controls">
            <button className="location-control" onClick={()=>{setEditShow(!editShow)}} ><i className="fas fa-edit"></i></button>
            <button className="location-control" onClick={()=>{dispatch(deleteLocation(location.id))}} ><i className="fas fa-trash-alt"></i></button>
        </div>
    </div>
    {editShow && <LoacationForm location={location} type="edit" closeForm={setEditShow} />}
    </>
}