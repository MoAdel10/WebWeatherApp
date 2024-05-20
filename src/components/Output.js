import { useContext } from "react"
import { Context } from "../Contex"

export default function Output({ city, country, date, temp, humidity, pressure,high,low ,visibility,icon}) {


    const {countryChosen, setCountryChosen,cityName,setCityName,data,setData} = useContext(Context)

   

    return (
        <div className="output-cont">
            <div className="data-city-cont">
                <p>{date}</p>
                <p>{city} {country}</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
            <h1>{temp}°C</h1>
            <p>Humidity {humidity}% | High {high}°C Low {low}°C</p>
            <p>Pressure: {pressure}mb visablitiy:{visibility}</p>
        </div>
    )
}