import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import DayCell from './DayCell';
import './Calendar.css';
import TimePicker from './TimePicker';
import {makeBooking} from '../../store/bookings';

export default function Calendar (props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [month, setMonth] = useState(props.month);
    const [year, setYear] = useState(props.year);
    const [monthCal, setMonthCal] = useState([]);
    const [firstblock, setFirstBlock] = useState("");
    const [selected, setSelected] = useState(new Set());
    const [pickedDate, setPickedDate] = useState(0);
    const [bookingDates, setBookingDates] = useState("");

    const MonthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const type = props.type || ""

    const bookings = useSelector(state => state.bookings);
    const user = useSelector(state => state.session.user);

    let dt = new Date();
    const thisMonth = dt.getMonth()+1;
    const thisYear = dt.getFullYear();
    //radio - select one of available   For: making bookings
    //checkbox select many,             For: creating experiences
    //"" - select one of any            For: selecting starting-ending date

    if (!month || !year){
        setMonth(thisMonth);
        setYear(thisYear);
    }

    useEffect(()=>{
        let date = new Date(month+"/1/"+year)
        const thisMonth = [];
        while (date.getMonth()+1 === month) {
            thisMonth.push(new Date(date));
            date.setDate(date.getDate() + 1)
        }
        setMonthCal(thisMonth);
        if (thisMonth[0].getDay()!==0) {
            const style = {
                gridColumnStart: "1",
                gridColumnEnd: `span ${thisMonth[0].getDay()}`
            }
            setFirstBlock(<div style={style} className="firstblock"></div>)
        }
    },[month,year])

    useEffect(()=>{
        if (type==="radio") {
            const newSet = new Set();
            bookings.forEach(book => {
                const dt = new Date(book.date);
                const str = (dt.getMonth()+1)+"/"+dt.getDate()+"/"+dt.getFullYear();
                newSet.add(str);
            })
            setBookingDates(newSet);
        }
    },[bookings, type])

    function onClick(e) {
        const day = `${month}/${e.target.innerHTML}/${year}`;
        let newSet;
        if (type === "checkbox"){
            newSet = new Set(selected);
        }
        if (type==="radio" || type===""){
            newSet = new Set();
        }
        newSet.add(day);
        setSelected(newSet);
        setPickedDate(0);
    }

    return (
    <div className="booking-grid">
        <div className="calendar">
            <h2>{MonthsArray[month-1]+", "+year}</h2>
            <div className="calendar-grid">
                <div className="header">Su</div>
                <div className="header">Mo</div>
                <div className="header">Tu</div>
                <div className="header">We</div>
                <div className="header">Th</div>
                <div className="header">Fr</div>
                <div className="header">Sa</div>
                {firstblock}
                {monthCal.map(day => {
                    const date=month+"/"+day.getDate()+"/"+year;
                    return (
                    <DayCell 
                        key={date} 
                        day={day} 
                        type={type} 
                        onClickFn={onClick} 
                        isAvailable={bookingDates.has(date)} 
                        isSelected={selected.has(date)}/>
                    )
                })}
            </div>
            <div className="prev-month" style={(thisMonth===month&&thisYear===year)?{visibility:"hidden"}:{}}>
                <button onClick={()=> {
                    if(month-1 === 0) {
                        setYear(year-1);
                        setMonth(12);
                    } else {
                        setMonth(month-1);
                    }
                }}><i className="fas fa-angle-double-left"></i></button>
            </div>
            <div className="next-month">
                <button onClick={()=> {
                    if(month+1 === 13) {
                        setYear(year+1);
                        setMonth(1);
                    } else {
                        setMonth(month+1);
                    }
                }}><i className="fas fa-angle-double-right"></i></button>
            </div>
        </div>
        {(type==="radio" && (selected.size>0) && (
            <div className="time">
            <TimePicker date={[...selected][0]} setPickedDate={setPickedDate} pickedDate={pickedDate}/>
            <button 
                disabled={pickedDate===0?"disabled":false} 
                onClick={()=>{
                    dispatch(makeBooking({booking: bookings.find(book=>book.id===pickedDate), user}))
                        .then(()=>{
                            setPickedDate(0);
                            setSelected(new Set());
                            history.push("/memories/booked")
                        })
                        .catch((res) => {
                              if (res.data && res.data.errors) console.log(res.data.errors);
                        })
                }}
            >Confirm</button>
            </div>
        ))}
        
    </div>
    )
}
