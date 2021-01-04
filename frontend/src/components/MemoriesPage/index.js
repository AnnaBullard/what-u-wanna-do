import './MemoriesPage.css'
import {Redirect, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import MemoriesNavigation from "./MemoriesNavigation";
import Booked from './Booked';
import Locations from '../Locations';
import Profile from './Profile';
import Hosted from '../Hosted';
import Schedule from './Schedule';

export default function MemoriesPage () {
    const {type} = useParams();
    const user = useSelector(state => state.session.user);

    if ((!["booked","hosted","locations","schedule"].includes(type) && type !== undefined) || !user) {
        return <Redirect to="/" />
    }

    let page = <Profile />;

    if (type === "booked") page = <Booked />;
    if (type === "locations") page = <Locations />;
    if (type === "hosted") page = <Hosted />;
    if (type === "schedule") page = <Schedule />;

    return (
        <div className="memories-page">
            <h1>Memories</h1>
            <MemoriesNavigation />
            {page}
        </div>
    )
}