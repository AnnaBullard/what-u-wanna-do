import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as experiencesActions from "../../store/experiences";
import ExperienceCard from './ExperienceCard';
import './ListExperiences.css'

export default function ListExperiences () {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const list = useSelector(state => state.experiences);

    useEffect(() => {
        dispatch(experiencesActions.getExperiences()).then(res => {setIsLoaded(true)});
    }, [dispatch]);

    return (isLoaded && <div>
      {Object.values(list).map(activity => <ExperienceCard activity={activity} key={"experience-list"+activity.id}/>)}
    </div>)
}
