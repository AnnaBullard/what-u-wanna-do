import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getStates} from '../../store/states';
import {editLocation,addLocation} from '../../store/locations';

export default function LocationForm ({location, type, closeForm}) {
    const dispatch = useDispatch();
    const [address1, setAddress1] = useState(location?location.address1:"")
    const [address2, setAddress2] = useState(location?location.address2:"")
    const [city, setCity] = useState(location?location.city:"")
    const [stateId, setStateId] = useState(location?location.stateId:0)
    const [zip, setZip] = useState(location?location.zip:"")
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const states = useSelector(state=>state.states);

    useEffect(()=>{
        dispatch(getStates()).then(res => {setIsLoaded(true)})
    },[dispatch])

    const handleSubmit = e => {
        e.preventDefault();
        if (!location) location = {}

        if (type==="edit") {
            dispatch(editLocation({
                ...location,
                address1, address2, city, stateId, zip
            }))
            .then(res => {closeForm(false)})
            .catch(
                (res) => {
                  if (res.data && res.data.errors) setErrors(res.data.errors);
                }
            )
        } else {
            dispatch(addLocation({
                ...location,
                address1, address2, city, stateId, zip
            }))
            .then(res => {closeForm(false)})
            .catch(
                (res) => {
                  if (res.data && res.data.errors) setErrors(res.data.errors);
                }
            )
        }
    }

    return isLoaded && <form onSubmit={handleSubmit} className="location-form">
        <ul style={errors.length?{}:{display: "none"}}>
            {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
        </ul>
        <label htmlFor="address1"> Address
            <input type="text" name="address1" id ="address1"
            value={address1} onChange={e=>{setAddress1(e.target.value)}}/>
        </label>
        <label htmlFor="city">City
            <input type="text" name="city" id ="city"
            value={city} onChange={e=>{setCity(e.target.value)}}/>
        </label>
        <label htmlFor="state">State
            <select value={stateId} name="state" id ="state"onChange={e=>{setStateId(e.target.value)}}> 
                {states.map(state=><option value={state.id} key={`state-${state.id}`}>{state.abb}</option>)}
            </select>
        </label>
        <label htmlFor="zip">Zip
            <input type="text" name="zip" id ="zip"
            value={zip} onChange={e=>{setZip(e.target.value)}}/>
        </label>
        <label htmlFor="address2"> Details
            <input type="text" name="address2" id ="address2"
            value={address2} onChange={e=>{setAddress2(e.target.value)}}/>
        </label>
        <div className="location-form-controls">
            <button type="submit">{type==="edit"?"Edit ":"Add "} Location</button>
            <button onClick={()=>{closeForm(false);}}>Cancel</button>
        </div>
    </form>

}