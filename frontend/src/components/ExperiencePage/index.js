import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as experienceActions from "../../store/singleExperience";
import * as bookingActions from "../../store/bookings";
import Calendar from '../Calendar';
import LocationString from '../Locations/LocationString';
import "./ExperiencePage.css"

export default function ExperiencePage () {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(experienceActions.getExperience(id))
        dispatch(bookingActions.getAvailable(id))
    },[dispatch, id]);

    const experience = useSelector(store => store.singleExperience);
    const bookings = useSelector(store => store.bookings);
    const user = useSelector(store => store.session.user);
    
    if (Object.keys(experience).length>0)
        return (
            <>
            <div className="card">
                <div className="card-image">
                    <img src={experience.imageUrl} alt={experience.title}/>
                </div>
                <div className="card-info">
                    <h1>{experience.title}</h1>
                    <p>by {experience.User?experience.User.username:""}</p>
                    <p><strong>Price:</strong> ${experience.currentPrice}</p>
                    <p><strong>Duration:</strong> {Math.floor(experience.duration/60)+" hour(s) "+experience.duration%60+" minute(s)"}</p>
                    <p><LocationString location={experience.Location}/></p>
                    <p><strong>About:</strong> {experience.description}</p>
                </div>
            </div>
            {(user && user.id !== experience.hostId) && <Calendar bookings={bookings} type={"radio"}/>}
            </>
        )
    else 
        return null
}
