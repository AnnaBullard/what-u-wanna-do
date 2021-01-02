import './MemoriesPage.css'
import {Redirect, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import MemoriesNavigation from "./MemoriesNavigation";
import Booked from './Booked';

export default function MemoriesPage () {
    const {type} = useParams();
    const user = useSelector(state => state.session.user);

    if ((!["booked","hosted","locations"].includes(type) && type !== undefined) || !user) {
        return <Redirect to="/" />
    }

    let page = <h1>profile page</h1>;

    if (type === "booked") page = <Booked />;

    return (
        <div className="memories-page">
            <h1>Memories</h1>
            <MemoriesNavigation />
            {page}
        </div>
    )
}