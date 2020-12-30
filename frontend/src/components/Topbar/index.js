import {Link} from 'react-router-dom';
import Navigation from "../Navigation";
import './Topbar.css';

export default function Topbar ({isLoaded}) {
    return (
        <div className="topbar-wrap">
            <div id="topbar">
                <div className="logo">
                    <Link to="/">
                            W<span className="what">hat</span>UW<span className="wanna">anna</span>D<span className="do">o</span>
                    </Link>
                </div>
                <Navigation isLoaded={isLoaded} />
            </div>
        </div>
    )
}
