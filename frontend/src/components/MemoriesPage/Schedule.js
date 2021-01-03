import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {getExperiences} from '../../store/experiences';

export default function Schedule () {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const experiences = useSelector(state => state.bookings);

    useEffect(()=> {
        dispatch(getExperiences("hosted"));
    }, [dispatch])

    return <div className="schedule-grid">
        <ul>
            <NavLink to="/memories/schedule"><li>All</li></NavLink>
            <NavLink to="/memories/schedule/available"><li>Available</li></NavLink>
            <NavLink to="/memories/schedule/pending"><li>Pending</li></NavLink>
            <NavLink to="/memories/schedule/confirmed"><li>Confirmed</li></NavLink>
        </ul>
    </div>
}