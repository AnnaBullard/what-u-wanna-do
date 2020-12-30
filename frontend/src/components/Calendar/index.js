import {useEffect, useState} from 'react';
import DayCell from './DayCell';
import './Calendar.css';

export default function Calendar (props) {
    const [month, setMonth] = useState(props.month);
    const [year, setYear] = useState(props.year);
    const [monthCal, setMonthCal] = useState([]);
    const [firstblock, setFirstBlock] = useState("");
    const [selected, setSelected] = useState(new Set());
    const MonthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const type = props.type || ""
    //radio - select one of available   For: making bookings
    //checkbox select many,             For: creating experiences
    //"" - select one of any            For: selecting starting-ending date

    const bookingDates = new Set();
    if (type==="radio") {
        props.bookings.forEach(book => {
            console.log(book.date)
        })
    }

    if (!month || !year){
        let dt = new Date();
        setMonth(dt.getMonth()+1);
        setYear(dt.getFullYear());
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

    function onClick(e) {
        if (type === "checkbox"){
            const day = parseInt(e.target.innerHTML);
            const newSet = new Set(selected);
            newSet.add(day);
            setSelected(newSet);
        }
        if (type==="radio" || type===""){
            const day = parseInt(e.target.innerHTML);
            const newSet = new Set();
            newSet.add(day);
            setSelected(newSet);
        }
    }

    return (
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
            {monthCal.map(day => <DayCell day={day} type={type} onClickFn={onClick} isAvailable={day.getDate()%2===1} isSelected={selected.has(day.getDate())}/>)}
        </div>
        <div className="prev-month">
            <button onClick={()=> {
                if(month-1 === 0) {
                    setYear(year-1);
                    setMonth(12);
                } else {
                    setMonth(month-1);
                }
                setSelected(new Set());
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
                setSelected(new Set());
            }}><i className="fas fa-angle-double-right"></i></button>
        </div>
    </div>
    )
}
