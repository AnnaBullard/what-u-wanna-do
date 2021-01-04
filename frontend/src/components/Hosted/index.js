// import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
// import {getExperiences} from '../../store/experiences';
import HostedList from './HostedList';
import ExperienceEdit from './ExperienceEdit';
import './Hosted.css';

export default function Hosted () {
    const [addShow, setAddShow] = useState(false)

    return <div className="hosted-grid">
    {!addShow && <button className="location-control" onClick={()=>{setAddShow(true)}}><i className="fas fa-plus"></i></button>}
    {addShow && <ExperienceEdit closeForm={()=>{setAddShow(false)}} />}
    <HostedList />
    </div>
}