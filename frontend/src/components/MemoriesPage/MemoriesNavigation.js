import {NavLink} from 'react-router-dom';
export default function MemoriesNavigation ({type}) {
    return (
        <div className="memories-navbar">
            <NavLink exact to="/memories" activeClassName="selected">My profile</NavLink>
            <NavLink to="/memories/hosted" activeClassName="selected">Hosted</NavLink>
            <NavLink to="/memories/booked" activeClassName="selected">Booked</NavLink>
            <NavLink to="/memories/locations" activeClassName="selected">Locations</NavLink>
        </div>
    )
}