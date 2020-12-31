import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as experienceActions from "../../store/singleExperience";
import * as bookingActions from "../../store/bookings";
import Calendar from '../Calendar';
import "./ExperiencePage.css"

export default function ExperiencePage () {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(experienceActions.getExperience(id))
        dispatch(bookingActions.getBookings(id))
    },[dispatch, id]);

    const experience = useSelector(store => store.singleExperience);
    const bookings = useSelector(store => store.bookings);

    return experience && (
        <div className="card-info">
            <div className="card-image">
                <img src={experience.imageUrl} alt={experience.title}/>
            </div>
            <h1>{experience.title}</h1>
            <p>by {experience.User?experience.User.username:""}</p>
            <p><strong>Price:</strong> ${experience.currentPrice}</p>
            <p><strong>About:</strong> {experience.description}</p>
            <Calendar bookings={bookings} type={"radio"}/>
        </div>
    )
}
