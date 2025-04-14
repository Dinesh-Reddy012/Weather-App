import InfoBox from "./infoBox"
import SearchBox from "./SearchBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:'Delhi',
        Weather : "clear sky",
        feelsLike :  30.78,
        humidity: 21,
        temp:32.77,
        tempMax: 32.77,
        tempMin:32.77,
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"white"}}>Weather App by Dinesh</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}