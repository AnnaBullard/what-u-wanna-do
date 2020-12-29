import {Link} from 'react-router-dom';

export default function ExperienceCard ({activity}) {
    const isPositive = Math.floor(Math.random() * 100) % 2;
    const random = ((Math.random() * 10) /1000) * Math.pow(-1, isPositive);
    const style = {
        transform: `rotate(${random}turn)`
    }
    return (
        <Link to={`/experiences/${activity.id}`}>
            <div className="experience-card" style={style}>
                <img src="/img/default-activity.jpg" />
                <span className="price">${Math.round(activity.currentPrice)}</span>
                <span className="title">{activity.title}</span>
                <span className="host">by {activity.User.username}</span>
            </div>
        </Link>
    )
}
