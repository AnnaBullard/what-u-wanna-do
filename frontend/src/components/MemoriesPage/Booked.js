import { useEffect,useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getBooked, unbook} from '../../store/bookings';
import ExperienceCard from '../ListExperiences/ExperienceCard';

export default function Booked () {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings);

    useEffect(()=>{
        dispatch(getBooked()).then(res => setIsLoaded(true));
    },[dispatch]);

    return isLoaded && (
        <div className="booked-grid">
            {bookings.map(rec => {
                const dt = new Date(rec.dateWithTimeZone);
                const date = dt.toDateString();
                const time = dt.getHours()%12+":"+dt.getMinutes()+" "+(dt.getHours()<12?"AM":"PM");
                const today = new Date();
                const activity = {...rec.Experience,currentPrice:rec.price};

                return( 
                <div className="booked-card" key={"booking-item-"+activity.id+"-"+date+"-"+time}>
                    <ExperienceCard activity={activity} passed={(dt<=today)} />
                    <div className={`card-date${(rec.statusId === 3)?" confirmed":" pending"}${(dt<=today)?" passed":""}`}>
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                    <div style={((dt<=today)?{display:'none'}:{})} className="card-controls">
                        <button onClick={()=>{dispatch(unbook(rec.id))}}><i className="fas fa-times"></i></button>
                    </div>
                </div>)
            })}
        </div>
    )
}