import React, { useState } from 'react'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import { CiSearch } from "react-icons/ci";

const WeatherDash = () => {

    const [inputVal, setInputVal] = useState("")
    // const [weatherData, setWeatherData] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState(cloud);
    const [temperature, setTemperature] = useState(0);
    const [location, setLocation] = useState("");
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);

    let api_key = "703d0eedc7e8dc76234b8b3084925c77"
    const handleSearch = async () => {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=Metric&appid=${api_key}`
            let res = await fetch(url)
            let data = await res.json()
            // setWeatherData(data);
            setTemperature(Math.floor(data.main.temp));
            setLocation(data.name);
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);

            const weatherCode = data.weather[0].icon;
            setWeatherIcon(getWeatherIcon(weatherCode));
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getWeatherIcon = (code) => {
        switch (code) {
            case "01d":
            case "01n":
                return clear;
            case "02d":
            case "02n":
                return cloud;
            case "03d":
            case "03n":
                return drizzle;
            case "04d":
            case "04n":
                return drizzle;
            case "09d":
            case "09n":
                return rain;
            case "10d":
            case "10n":
                return rain;
            case "13d":
            case "13n":
                return snow;
            default:
                return clear;
        }
    }

    return (
        <div className='mt-10 ml-[30%] relative text-white'>
            <div className='flex gap-[15px]'>
                <input className='p-[2%] m-[2%] w-[50%] rounded-full outline-none'
                    type="text" name="city" id="city" placeholder='Enter City Name'
                    onChange={(e) => {
                        console.log(e.target.value)
                        setInputVal(e.target.value)
                    }}
                />
                <CiSearch className='text-3xl mt-[3%]'
                    onClick={() => { handleSearch() }} />
            </div>
            <div className=''>
                <img src={weatherIcon} alt='' className='w-[40%] ml-[8%]' />
            </div>
            <div className='mb-5 ml-[17%]'>
                <div className='text-6xl font-medium'>
                    {temperature}°C
                </div>
                <div className='text-5xl font-light'>{location}</div>
            </div>
            <div className='flex  gap-[20%] mt-[12%]'>
                <div className='flex gap-[8%] '>
                    <img src={humidity_icon} alt="" className='h-[47%]' />
                    <div className=''>
                        <div className='humidity-percent'>{humidity}%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='flex gap-[8%]'>
                    <img src={wind} alt='' className=' w-[24%]' />
                    <div className=''>
                        <div className='wind-rate'>{windSpeed} km/hr</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDash
