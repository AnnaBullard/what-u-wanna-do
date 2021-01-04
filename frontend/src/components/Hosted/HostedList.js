import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getExperiences} from '../../store/experiences';
import ExperienceCard from '../ListExperiences/ExperienceCardHost';

export default function HostedList () {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const experiences = useSelector(state => state.experiences);

    useEffect(()=> {
        dispatch(getExperiences("hosted")).then(res => {setIsLoaded(true)});
    }, [dispatch])

    return isLoaded && <div className="hosted-grid">
        {Object.values(experiences).map(activity=>
        <ExperienceCard activity={activity} key={"experience-hosted-"+activity.id}/>)}
    </div>
}