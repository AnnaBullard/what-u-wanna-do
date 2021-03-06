import {Link} from 'react-router-dom';
import {useState} from 'react';
import ExperienceEdit from '../Hosted/ExperienceEdit';

export default function ExperienceCardHost ({activity}) {
    const [editShow, setEditShow] = useState(false);
    const isPositive = Math.floor(Math.random() * 100) % 2;
    const random = ((Math.random() * 10) /1000) * Math.pow(-1, isPositive);
    const passed = activity.Bookings.length === 0;
    const style = {
        transform: `rotate(${random}turn)`
    }
    return (
        <div className="booked-card">
            {!editShow && <Link to={`/experiences/${activity.id}`}>
                <div className="experience-card" style={style}>
                    <img src={activity.imageUrl} alt={activity.title} className={passed?"passed":""} />
                    <span className="price">${Math.round(activity.currentPrice)}</span>
                    <span className="title">{activity.title}</span>
                </div>
            </Link>}
            {editShow && <ExperienceEdit activity={activity} type="edit" closeForm={()=>{setEditShow(false)}}/>}
            {!editShow && <div className="card-controls">
                <button onClick={()=>{setEditShow(true)}}><i className="fas fa-edit"></i></button>
            </div>}
        </div>
    )
}
