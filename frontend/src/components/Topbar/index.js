import Navigation from "../Navigation";
import './Topbar.css';

export default function Topbar ({isLoaded}) {
    return (
        <div className="topbar-wrap">
            <div id="topbar">
                <div className="logo">W<span className="what">hat</span>UW<span className="wanna">anna</span>D<span className="do">o</span></div>
                <Navigation isLoaded={isLoaded} />
            </div>
        </div>
    )
}
