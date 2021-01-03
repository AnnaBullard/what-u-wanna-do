import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getStates} from '../../store/states';

export default function LocationForm ({location, type}) {
    const dispatch = useDispatch();
    const [address1, setAddress1] = useState(location?location.address1:"")
    const [address2, setAddress2] = useState(location?location.address2:"")
    const [city, setCity] = useState(location?location.city:"")
    const [stateId, setStateId] = useState(location?location.stateId:0)
    const [zip, setZip] = useState(location?location.zip:"")
    const [isLoaded, setIsLoaded] = useState(false);
    const states = useSelector(state=>state.states);

    useEffect(()=>{
        dispatch(getStates()).then(res => {setIsLoaded(true)})
    },[dispatch])

    const handleSubmit = e => {
        e.preventDefault();
        console.log({address1,address2,city,stateId,zip})
    }

    return isLoaded && <form onSubmit={handleSubmit}>
        <label htmlFor="address1"> Address
            <input type="text" name="address1" id ="address1"
            value={address1} onChange={e=>{setAddress1(e.target.value)}}/>
        </label>
        <label htmlFor="address2"> Details
            <input type="text" name="address2" id ="address2"
            value={address2} onChange={e=>{setAddress2(e.target.value)}}/>
        </label>
        <label htmlFor="city">City
            <input type="text" name="city" id ="city"
            value={city} onChange={e=>{setCity(e.target.value)}}/>
        </label>
        <label htmlFor="state">State</label>
        <select value={stateId} name="state" id ="state"onChange={e=>{setStateId(e.target.value)}}> 
            {states.map(state=><option value={state.id} key={`${location.id}-${state.id}`}>{state.abb}</option>)}
        </select>
        <label htmlFor="zip">Zip
            <input type="text" name="zip" id ="zip"
            value={zip} onChange={e=>{setZip(e.target.value)}}/>
        </label>
        <button type="submit">{type==="edit"?"Edit ":"Add "} Location</button>
    </form>

}