import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getLocations} from '../../store/locations';
import LocationForm from '../Locations/LocationForm';

export default function ExperienceEdit ({activity, type}) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const [title, setTitle] = useState(activity?activity.title:"");
    const [description, setDecription] = useState(activity?activity.description:"");
    const [max, setMax] = useState(activity?activity.max:1);
    const [duration, setDuration] = useState(activity?activity.duration:0);
    const [currentPrice, setCurrentPrice] = useState(activity?activity.currentPrice:0.01);
    const [locationId, setLocationId] = useState(activity?activity.locationId:0);
    const [imageUrl, setImageUrl] = useState(activity?activity.imageUrl:"");
    const [addLocationShow, setAddLocationShow] = useState(false);

    const locations = useSelector(state => state.locations);
    const user = useSelector(state => state.session.user);

    useEffect(()=>{
        dispatch(getLocations()).then(res=>{setIsLoaded(true)})
    }, [dispatch])

    const handleSubmit = () => {
        console.log({
            title,
            description,
            max,
            duration,
            currentPrice,
            locationId,
            imageUrl,
            hostId: user.id
        })
    }

    return isLoaded && <div>
        <form style={{width: "800px",
    display: "flex",
    flexDirection: "column"}}>
            <div className="experience-edit">
                <div>
                    <label>
                        Image Url
                        <input type="text" value={imageUrl} onChange={e => {setImageUrl(e.target.value)}} disabled={(addLocationShow?"disabled":false)}/>
                    </label>
                    {(imageUrl!=="") && <img src={imageUrl} style={{maxWidth: "150px", maxHeight:"150px"}} alt="Experience"/>}
                </div>
                <div>
                    <label>
                        Title
                        <input type="text" maxLength="150" value={title} onChange={e => {setTitle(e.target.value)}} disabled={(addLocationShow?"disabled":false)}/>
                    </label>
                    <label>
                        Description
                        <textarea value={description} onChange={e => {setDecription(e.target.value)}} rows="5" disabled={(addLocationShow?"disabled":false)}></textarea>
                    </label>
                </div>
                <div>
                    <div className="inline">
                        <label>
                            Max People
                            <input style={{width:"80%"}} type="number" min="1" value={max} onChange={e => {setMax(e.target.value)}} disabled={(addLocationShow?"disabled":false)}/>
                        </label>
                        <label>
                            Duration
                            <span style={{width:"90%"}}><input style={{width:"80%"}} type="number" min="0" value={duration} onChange={e => {setDuration(e.target.value)}} disabled={(addLocationShow?"disabled":false)}/>
                            mins</span>
                        </label>
                    </div>
                    <label>
                        Price
                        <input type="number" min="0.01" step="any" value={currentPrice} onChange={e => {setCurrentPrice(e.target.value)}} disabled={(addLocationShow?"disabled":false)}/>
                    </label>
                    <label>
                        Location
                        <span className="inline">
                        <select style={{width:"210px"}} value={locationId} onChange={e => {setLocationId(e.target.value)}} disabled={(addLocationShow?"disabled":false)}>
                            {Object.values(locations).map(location =>
                            <option 
                                key={`location`+location.id} 
                                value={location.id}>
                                    {location.address1+", "+location.city+", "+location.State.abb+", "+location.zip}
                            </option>)}
                        </select>
                        <button className="location-control" onClick={e=>{
                            e.preventDefault();
                            setAddLocationShow(!addLocationShow)
                            }}><i className="fas fa-plus"></i></button>
                        </span>
                    </label>
                </div>
            </div>
            <button style={{width: "auto"}} disabled={(addLocationShow?"disabled":false)}>{type==="edit"?"Edit ":"Add "} Experience</button>
        </form>
        {addLocationShow && <LocationForm type="add-from-experience" closeForm={setAddLocationShow}/>}
    </div>
}