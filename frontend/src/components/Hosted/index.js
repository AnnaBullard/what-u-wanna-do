// import {useSelector, useDispatch} from 'react-redux';
// import {useEffect} from 'react';
// import {getExperiences} from '../../store/experiences';
import HostedList from './HostedList';
import ExperienceEdit from './ExperienceEdit';
import './Hosted.css';

export default function Hosted () {

    return <div className="hosted-grid">
    <ExperienceEdit />
    <HostedList />
    </div>
}