import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import './Locations.css';
import {getLocations} from '../../store/locations';
import LocationCard from './LocationCard';

export default function Locations () {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const locations = useSelector(state => state.locations);
    
    useEffect(()=>{
        dispatch(getLocations()).then(res =>{setIsLoaded(true)})
    }, [dispatch])

    return isLoaded && <div className="locations-grid">
        {Object.values(locations).map(location => {
            return (<LocationCard location={location} key={`location-${location.id}`} />)
        })}
    </div>
}