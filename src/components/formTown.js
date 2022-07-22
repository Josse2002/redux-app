import { useEffect, useState } from "react";
import { setCity } from "../features/slices/formTownSlice"
import { AddImage } from "../features/slices/sliceImage";
import { AddWheather, AddName } from "../features/slices/showWeatherSlice";
import { useDispatch, useSelector } from "react-redux";
import {imageCharge} from "../features/slices/sliceChargeImage"
import '../index.css';


function Landing() {
    const API_KEY = '31e006c6d38432979ca668b9dc6a87a3';
    const [town, setTown] = useState([])
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            const responseTown = await fetch(`https://restcountries.com/v3.1/all`)
            const dataTown = await responseTown.json();
            const arrayList = [];
            dataTown.map((value) => {
                arrayList.push(value.name.common)

            })
            setTown(arrayList.sort());
        }

        fetchData();
       

    }, []);

    function getValue(e){
        setName(e.target.value) 
    }

    async function sendInfo(ciudad) {
        dispatch(imageCharge(false))
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`
        const response = await fetch(API_URL);
        const data = await response.json();
        const clima = data.weather;
        const main = data.main;


        clima.find(object => {
           
            dispatch(AddWheather(object))
        })

        dispatch(AddName(main));
        dispatch(setCity(data.name))
        
        const apiURL = `https://api.scaleserp.com/search?api_key=8E2075C8559541FFA7648E93A15DBB4D&search_type=images&q=${ciudad + " ciudad wallpaper"}&page=1&max_page=1&num=1`;
        const respuesta = await fetch(apiURL);
        const dates = await respuesta.json();
        dispatch(imageCharge(true))
        dispatch(AddImage(dates.image_results[0].image));
      
    }
   

    function getCityInput(e) {
        e.preventDefault();
        sendInfo(name);
    }

    function getChangeSelect(e) {
        sendInfo(e.target.value);
    }
      
    return <div className="container formulario">
        <div className="Select">
            <select onChange={getChangeSelect} className="form-select form-select-sm" aria-label=".form-select-sm example">
                {town.map((value, index) => {
                    return (
                        <option key={index}>{value}</option>
                    )
                })}
                <option defaultValue="Select a country">Select a country</option>
            </select>
        </div>
        <div className="type">
        <input type="text" placeholder="Search a city..." onChange={getValue}></input>
        <button type="button" onClick={getCityInput}>Search</button>
        </div>
       
    </div>
    

}

export default Landing;