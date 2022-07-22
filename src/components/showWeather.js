import { useSelector } from "react-redux";
import Clear from '../assets/Clear.png'
import Clouds from '../assets/Clouds.png'
import Rain from '../assets/Rain.png'

import '../index.css'


function Weather() {
    const valuecity = useSelector((state) => state.wheather.value);
    const valueCountry = useSelector((state) => state.town.value);
    const imageCountry = useSelector((state) => state.image.value);
    const stateImage = useSelector((state) => state.stateImage.value);
    const arr = valuecity;
    var srcImage;

    if (arr.main === "Clouds") {
        srcImage = <img className="imgWeather" src={Clouds} alt={Clouds}></img>
    } else if (arr.main === "Clear") {
        srcImage = <img className="imgWeather" src={Clear} alt={Clear}></img>
    } else if (arr.main === "Rain") {
        srcImage = <img className="imgWeather" src={Rain} alt={Rain}></img>
    }
    var show;

    if (valueCountry === "") {
        show = <p className="noR">Search for a city or a country to view its weather</p>
    } else if (stateImage === true) {
        show = <div className="container-result" style={{
            backgroundImage: `url(${imageCountry})`
        }}>
            <div className="content-w">
            {srcImage}
            <h2>{valueCountry}</h2>
            <h2>Weather: {arr.main}</h2>
            <h2>{arr.description}</h2>
            <h2>Temperature: {arr.temp}°</h2>
            </div>
            
        </div>
    } else if (stateImage === false) {
        show = <div class="d-flex align-items-center charger">
            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
    }



    return <div>
        {
            show
        }
    </div>
}

export default Weather;