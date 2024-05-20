import React, { useEffect, useState } from 'react';
import './App.css';
import DropBox from './components/DropBox';
import { countries } from "./components/Countries"
import { Context } from './Contex';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const backGroundImages = ["Pyramids", "Colosseum"];
  let randImage = Math.floor(Math.random() * backGroundImages.length);

  const [backGround, setBackGround] = useState(backGroundImages[randImage]);
  const [countryChosen, setCountryChosen] = useState("");
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState(null);
  const [visibility, setVisibility] = useState(null);

  const changeBackground = () => {
    let randImage = Math.floor(Math.random() * backGroundImages.length);
    setBackGround(backGroundImages[randImage]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  function createDate() {
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let date = new Date();
    return (`${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`)
  }

  return (
    <Context.Provider value={{ countryChosen, setCountryChosen, cityName, setCityName, data, setData, visibility, setVisibility }}>
      <div className={`App ${backGround}`}>
        <Input />
        {data && data.main && (
          <Output
            city={cityName}
            country={countryChosen}
            date={createDate()}
            temp={data.main.temp}
            low={data.main.temp_min}
            high={data.main.temp_max}
            pressure={data.main.pressure}
            humidity={data.main.humidity}
            visibility={visibility}
            icon={data.weather[0].icon}
          />
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
