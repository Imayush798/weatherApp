import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity]= useState(null);
    const [search, setSearch] = useState("Banda");

    useEffect( () =>  {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d8a2893e0d3901b9ad6f49027a89b35f`

            const response = await fetch(url);
            
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
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

        {!city ? (
            <p className="errorMsg"> No Data Found</p>
        ) :(
             <div>

                   <div className="info">
                    
                   <h2 className="location">
                   <i className="fa-solid fa fa-street-view" id="anime" style={{color:"#fff"}}></i> {search}
                   {/* <i className="fa-solid fa fa-street-view" style={{color:"#fff"}}></i> {search} */}
                   </h2>
                   <p id="date">WED | OCT 23 | 10:48AM</p>
                   <h1 className="temp">
                   {city.temp}°Cel
                   </h1>
                   <h3 className="feelslike">
                    Feels like {city.feels_like}°Cel
                   </h3>
                   <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>

                   <div class="weather-details">
                        <div className="humidity">
                             <i class="fa-solid fa fa-droplet"></i>
                             <div className="text">
                                  <span id="humidity">{city.humidity}%</span>
                                  <p>Humidity</p>
                             </div>
                         </div>

                       <div className="wind">
                          <i className="fa-solid fa fa-wind"></i>
                          <div className="text">
                            <span id="wind-speed">12Km/H</span>
                            <p>Wind Speed</p>
                          </div>
                       </div>
                    </div>
                    <div className="copyright">
                    <footer>
                        <p>Created by Ayush Kumar © 2023</p>
                    </footer>
                </div>
                   
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                <div id="weathercon">
                        <i className="fa-solid fa fa-sun" style={{color:"#eccc68"}}></i>
                    </div>
             </div>
        )}
            
               </div>
        </>
    )
}

export default Tempapp;