import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { Context } from './Contex';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';

function App() {
  const backGroundImages = ["Pyramids", "Colosseum","Easter","Taj"];
  const [backGround, setBackGround] = useState(backGroundImages[Math.floor(Math.random() * backGroundImages.length)]);
  const [countryChosen, setCountryChosen] = useState("");
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState(null);
  const [visibility, setVisibility] = useState(null);

  const changeBackground = useCallback(() => {
    const randImage = Math.floor(Math.random() * backGroundImages.length);
    setBackGround(backGroundImages[randImage]);
  }, [backGroundImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground();
    }, 6000);
    return () => clearInterval(interval);
  }, [changeBackground]);

  function createDate() {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
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
        <div className='footer'>
          <Footer></Footer>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
