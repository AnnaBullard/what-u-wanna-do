import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getExperiences} from '../../store/experiences';
import ExperienceCard from '../ListExperiences/ExperienceCardHost';

export default function Hosted () {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const experiences = useSelector(state => state.experiences);

    useEffect(()=> {
        dispatch(getExperiences("hosted"));
    }, [dispatch])

    return <div className="hosted-grid">
        {experiences.map(activity=><ExperienceCard activity={activity} />)}
    </div>
}