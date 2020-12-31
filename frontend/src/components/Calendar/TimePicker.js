import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export default function TimePicker ({setPickedDate, date}) {
    const bookings = useSelector(state=>state.bookings);
    const [times, setTimes] = useState([]);

    useEffect(()=>{
        const newTimes = [];
        bookings.forEach(book => {
            const dt = new Date(book.date);
            const str = (dt.getMonth()+1)+"/"+dt.getDate()+"/"+dt.getFullYear();
            if (str===date) newTimes.push({id:book.id, time:book.dateWithTimeZone});
        })
        setTimes(newTimes);
    }, [bookings, date]);

    return (
        <div className="time-picker">
            <h3>Available time:</h3>
            {times.map(time=>{
                const dt = new Date(time.time);
                let h = dt.getHours();
                let m = dt.getMinutes();
                m = ("0"+m).slice(m.length-1);
                const ampm = h < 12?"AM":"PM";
                return (
                    <span onClick={()=>{setPickedDate(time.id)}} key={`time-h-m`}>{`${h%12}:${m} ${ampm}`}</span>
                )
            })} 
        </div>
    )
}