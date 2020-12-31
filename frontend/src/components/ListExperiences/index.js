import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as experiencesActions from "../../store/experiences";
import ExperienceCard from './ExperienceCard';
import './ListExperiences.css'

export default function ListExperiences () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(experiencesActions.getExperiences())
      }, [dispatch]);

    const list = useSelector(state => state.experiences);

    return (<div>
      {list.map(activity => <ExperienceCard activity={activity} />)}
    </div>)
}
