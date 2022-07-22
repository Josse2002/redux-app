import { useSelector } from "react-redux";
import Clear from '../assets/Clear.png'
import Clouds from '../assets/Clouds.png'
import Rain from '../assets/Rain.png'
import '../index.css'

function ShowingMyWeather() {
    
    const valuecity = useSelector((state) => state.myplace.value);

    const array = valuecity;
    var srcImage;

    if (array.main === "Clouds") {
        srcImage = <img className="imgWeather" src={Clouds} alt={Clouds}></img>
    }else if (array.main === "Clear") {
        srcImage = <img className="imgWeather" src={Clear} alt={Clear}></img>
    }else if(array.main === "Rain"){
        srcImage = <img className="imgWeather" src={Rain} alt={Rain}></img>
    }


    return <div className="myWeatherInfo">
        <div className="tittle">
            <h1>Weather App</h1>
        </div>
       {srcImage}
       <h2 id="name">{array.name}</h2>
       <h3>{array.main}</h3>
       <h4>{array.description}</h4>
       <h3>{array.temp}°</h3>
    </div>

}

export default ShowingMyWeather;


