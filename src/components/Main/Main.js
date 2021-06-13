import React,{useState} from 'react';

const api={
    key: 'be20f40819aa6518ef1d8eeffc368109',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function Main () {
const [query, setQuery]= useState('');
const [weather, setWeather]= useState({});

const search = evt => {
    if(evt.key === 'Enter'){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json() )
        .then(result => {
            setWeather(result);
            setQuery('');
        });
    }
}

 const dateBuilder = (d) => {
     let months=["January","February","March","April","May","June","July",
     "August","September","October","November","December"];
     let days = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${day} ${date} ${month} ${year}`
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
        
             {(typeof weather.main !== "undefined" ) ? (
                <div>
                    <div className="date">
                     {dateBuilder(new Date())}  
                      </div>
                 <div className="location-box">
                   <div className="location">
                    {weather.name},
                    {weather.sys.country}   
                    </div>
                    
                </div>
                     <div className="weather-box">
                     <div className="temp">
                      {Math.round(weather.main.temp)}C
                </div>
                <div className="feelslike">
                     Feels like {Math.round(weather.main.feels_like)}C {weather.weather[0].main },{weather.weather[0].description }
                </div>
                </div>
                    <div className="wind">{weather.wind.speed}m/s NNW </div>
                    <div className="humidity">Humidity:{weather.main.humidity}% </div>
                    <div className="dewpoint">Dew pont:{weather.main.temp_min}C </div>
                    <div className="pressure">{weather.main.pressure}hPa </div>
                    <div className="visibility">Visibility: {weather.visibility}km </div>
                    </div>
                        ) : ('')}
      </main>
     </div>       
    );
             

}
export default Main