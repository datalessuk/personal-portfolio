import '../styles/Welcome.scss'
import mapMarker from '../Icons/map-marker.svg'
function WelcomeText(){
    return(
        <div className="aboutme-container">
            <h5>Mark <span>Harrison</span></h5>
            <br />
            <h4 id="main-heading"><span></span>front end developer</h4>
            <h5><span className="map-icon"><img src={mapMarker} alt="mapmarker"></img></span>United kingdom</h5>
            </div>
    )
}
export default WelcomeText;