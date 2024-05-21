import DropBox from "./DropBox";
import React, { useContext } from 'react';

import { countries } from "./Countries"
import { KEY } from "../env";
import { Context } from "../Contex";



export default function Input(){

    const {countryChosen, setCountryChosen,cityName,setCityName,setData,setVisibility} = useContext(Context)


    function handleCityInputChange(event) {
        setCityName(event.target.value);
        setData(null)
    }
    
    function handleCountryChange(event) {
      setCountryChosen(event.target.value);
    }

    function handlePress(event){
      if(event.key === "Enter"){
        getApi();
      }
    }
    

    function getApi() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryChosen}&units=metric&appid=${KEY}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json);
                setVisibility(json.visibility)
            })
            .catch(error => console.error("Error fetching weather data:", error));
    }
    

    return (
      <div className="input-cont">
        <input type="text" placeholder="Type the city name" id="txt"  onChange={handleCityInputChange} onKeyDown={handlePress}></input>
         <DropBox id={"countries"} options={countries} onChange={handleCountryChange} ></DropBox>
        <h3 className="button" onClick={getApi}>
            Ok
        </h3>
      </div>
    )
}