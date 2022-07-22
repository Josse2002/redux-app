import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { myWheather, addDesc, name } from "../features/slices/myWeatherSlice";
import "../index.css"


function ShowingWeather() {
    const API_KEY = '31e006c6d38432979ca668b9dc6a87a3';
    const dispatch = useDispatch()
    var estadoClima;
    const [clima, setClima] = useState("");
    useEffect(() => {
        async function success(position) {
            var options = {
                enableHighAccuracy: true,
                timeout: Infinity,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition(success, error, options);
            var coordenadas = position.coords;
            const API_URL_PERSON = `https://api.openweathermap.org/data/2.5/weather?lat=${coordenadas.latitude}&lon=${coordenadas.longitude}&appid=${API_KEY}`
            const respuesta = await fetch(API_URL_PERSON);
            const datos = await respuesta.json();
            const clima = datos.weather;
            const main = datos.main; 
            clima.find(objeto => {
                dispatch(myWheather(objeto))
                setClima(objeto.main)
            })        
            dispatch(addDesc(main))
            dispatch(name({ "name": datos.name }))
            var options = {
                enableHighAccuracy: true,
                timeout: Infinity,
                maximumAge: 0
            };  
        };
      
        
        function error(error) {
            console.warn('ERROR(' + error.code + '): ' + error.message);
        };

        success();

    }, []);
    

    if (clima == "Rain") {
        var mapVal = <p>Parece que va a llover🎶, lleva paraguas</p>
    }else if (clima == "Clear") {
        var mapVal = <p>Parece que sera un buen día ☀️</p>
    }else if (clima == "Clouds") {
        var mapVal = <p>Hoy parece ser un dia muy nublado 😶‍🌫️</p>
    }

    return <div className="textStatus">
        {mapVal}
    </div>
}

export default ShowingWeather;