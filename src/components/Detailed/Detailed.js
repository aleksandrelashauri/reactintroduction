import React,{useState} from 'react';
import './style.css'


const api={
    key: '07853eb7494e4bc0b88e270632080110',
    base: 'http://api.weatherbit.io/v2.0/'
}
function Detailed() {
const [query, setQuery]= useState('');
const [weather, setWeather]= useState({});
const search = evt => {
    if(evt.key === 'Enter'){
        fetch(`${api.base}forecast/daily?city=${query}&key=${api.key}`)
        .then(res => res.json() )
        .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
        });
    }
}

    return (
        <div className="app">
         <main>
            <div className="search-box">
                 <input type="text"
                  className="search-bar" 
                  placeholder="search..." 
                  onChange= { e  => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                     />
                 </div>
        
             {(typeof weather.data !== "undefined" ) ? (
            <div>
                <div className="column">
                <div className="forecast">8 day forecast</div>
                    <div className="row">
                    <div className="date">
                     {weather.data[0].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[0].app_max_temp}/ {weather.data[0].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[0].weather.description}
                </div>      
              </div>

                  <div className="row">
                  <div className="date">
                     {weather.data[1].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[1].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[1].app_max_temp} / {weather.data[1].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[1].weather.description}
                </div>      
              </div>
              
              <div className="row">
              <div className="date">
                     {weather.data[2].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[2].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[2].app_max_temp} / {weather.data[2].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[2].weather.description}
                </div>      
              </div>

              <div className="row">
              <div className="date">
                     {weather.data[3].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[3].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[3].app_max_temp} / {weather.data[3].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[3].weather.description}
                </div>      
              </div>

              <div className="row">
              <div className="date">
                     {weather.data[4].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[4].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[4].app_max_temp} / {weather.data[1].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[4].weather.description}
                </div>      
              </div>

              <div className="row">
              <div className="date">
                     {weather.data[5].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[5].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[5].app_max_temp} / {weather.data[5].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[5].weather.description}
                </div>      
              </div>

              <div className="row">
              <div className="date">
                     {weather.data[6].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[6].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[6].app_max_temp} / {weather.data[6].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[6].weather.description}
                </div>      
              </div>

              <div className="row">
              <div className="date">
                     {weather.data[7].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[7].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[7].app_max_temp} / {weather.data[7].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[7].weather.description}
                </div>      
              </div>

              <div className="row">
              <div className="date">
                     {weather.data[8].datetime}
                </div> 
                      <div className="city-icon" style={{ 
                 backgroundImage: `url("https://www.weatherbit.io/static/img/icons/${weather.data[8].weather.icon}.png")` }}></div>

                 <div className="temp">
                     {weather.data[8].app_max_temp} / {weather.data[8].app_min_temp}°C
                </div>
                <div className="desc">
                     {weather.data[8].weather.description}
                </div>      
              </div>

                </div>

                  
                    </div>
                        ) : ('')}
      </main>
     </div>       
    );
             

}
export default Detailed