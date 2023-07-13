import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity]= useState(null);
    const [wind, setWind]= useState(null);
    const [search, setSearch] = useState("Banda");

    useEffect( () =>  {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d8a2893e0d3901b9ad6f49027a89b35f`

            const response = await fetch(url);
            
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
            setWind(resJson.wind);
        };
         fetchApi();
    }, [search] )
    return(
        <>
        
        <div className="box">
               <div className="inputData">
                   <input 
                   type="search" 
                   value={search}
                   className="inputField"
                   onChange = {(event) => { setSearch(event.target.value) } } />
                </div> 

             {!city ? ( <p className="errorMsg">Oops!! No Data Found</p> ):(
                 

                   <div className="info">
                       <h2 className="location">{search}</h2>
                       <h1 className="temp">{city.temp}° Cel</h1>
                       <h3 className="feelslike">Feels like {city.feels_like}° Cel </h3>
                       <h3 className="tempmin_max">Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel </h3>

                       <div class="weather-details">
                             <i class="fa-solid fa fa-droplet"> <span id="humidity">{city.humidity} %</span></i>
                          <i className="fa-solid fa fa-wind"> <span id="wind-speed">{wind.speed} M/s</span></i>
                       </div>
                    </div>
                   
        )}
            
        </div>
        <div className="footer"> &copy; All Right Reserved - Ayush Kumar</div>
        </>
    )
}

export default Tempapp;