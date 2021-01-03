export default function LocationString ({location}) {
    const googleMapSearch = "https://www.google.com/maps/search/"+(location.address1+" "+location.city+" "+location.State.abb+" "+location.zip).replace(/\s+/g,"%20")

    return <>
    <span className="location-string">
        <a href={googleMapSearch} target="blank">
            <div><i className="fas fa-map-marker-alt"></i>     
            {location.address1}, {location.city}, {location.State.abb}, {location.zip}</div>
            <div>{location.address2}</div>
        </a>
    </span>
    </>
}