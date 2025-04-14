import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false)

 const API_URL="https://api.openweathermap.org/data/2.5/weather";
 const API_KEY ="2e00c514fee7b62b5c8b33c9333b2da6";
   
 let getWeatherInfo=async ()=>{
  try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  let jsonResponse=await response.json();
 
  let result={
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      Weather:jsonResponse.weather[0].description
  };
  setError(false)
  console.log(result)
  return result;
  }
  catch(err){
        {throw err};
  }
    
 }



  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
   try{
    e.preventDefault();
    console.log(city);
    setCity("");
    let newInfo=await getWeatherInfo()
    updateInfo(newInfo)
   }
   catch(err){
     setError(true);
     console.log(err)
   }
  };

  return (
    <div className="SearchBox">
     
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          value={city}
          variant="outlined"
          required
          onChange={handleChange}
          InputProps={{
            style: {
              color: "white", // text inside the input box
              // optional: to make background stand out
            },
          }}
          InputLabelProps={{
            style: { color: "white" }, // label color
          }}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place  in our API</p>}
      </form>
    </div>
  );
}
