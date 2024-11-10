import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { fetchCountries, fetchStates, fetchCities } from '../redux/actions/Geo';
import debounce from 'lodash.debounce';
import axios from 'axios'; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'; 

const Dashboard = () => {
  const getWeatherIcon = (temperature) => {
    if (temperature <= 10) {
        return 'https://static.vecteezy.com/system/resources/thumbnails/009/349/657/small/emoticon-cold-freezing-face-png.png';
    } else if (temperature <= 25) {
        return 'https://www.pngitem.com/pimgs/m/352-3527495_transparent-excitement-clipart-stick-figure-teacher-clipart-hd.png';
    } else {
        return 'https://www.freeiconspng.com/thumbs/hot-png/hot-sun-png-hd-8.png';
    }
  };

  const dispatch = useDispatch();
  const { countries, states, cities, loading, error } = useSelector((state) => state.geo);

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');
  const [searchValue, setSearchValue] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    dispatch(fetchCountries());
    fetchWeatherData(43.65107, -79.347015); 
  }, [dispatch]);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&current_weather=true`
      );
      const data = await response.json();
      if (data.current_weather && data.hourly) {
        setWeatherData(data);
      } else {
        throw new Error('Invalid data structure from API');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    
    

    if (value) {
      const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );

      const filteredStates = states.filter(state =>
        state.name.toLowerCase().includes(value.toLowerCase())
      );

      const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredResults([...filteredCountries, ...filteredStates, ...filteredCities]);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSelection = async (item) => {
    setSearchValue(item.name);
    setFilteredResults([]);

    try {
      
      const response = await axios.get(`https://geocode.xyz/${item.name}?json=1`);
      const { longt, latt } = response.data;

      
      if (longt && latt) {
        fetchWeatherData(longt, latt);
      } else {
        console.error('No latitude and longitude found for', item.name);
      }
    } catch (error) {
      console.error('Error fetching geocode data:', error);
    }
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value) {
        dispatch(fetchStates(value)); 
        dispatch(fetchCities(value)); 
      }
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    debouncedSearch(searchValue);
  }, [searchValue, debouncedSearch]);

  const labels = weatherData?.hourly?.time.map((time) =>
    new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  );
  const temperatureData = weatherData?.hourly?.temperature_2m;
  const humidityData = weatherData?.hourly?.relative_humidity_2m;

  const chartData = labels?.map((label, index) => ({
    time: label,
    temperature: temperatureData[index],
    humidity: humidityData[index],
  }));

  const { temperature, windspeed: windSpeed } = weatherData ? weatherData.current_weather : {};
  const weatherIcon = weatherData ? getWeatherIcon(temperature) : null;

  return (
    <div className="w-full max-w-[1280px] h-auto bg-white flex flex-col items-center mx-auto">
      <Header />
      <div className="self-stretch h-[1214px] bg-white flex-col justify-start items-start flex">
        <div className="self-stretch h-[1149px] px-40 py-5 justify-center items-start inline-flex">
          <div className="w-[960px] py-5 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[76px] px-4 pt-6 pb-3 flex-col justify-start items-center flex">
              <div className="self-stretch text-center text-[#111616] text-[32px] font-bold">
                You are in {city}
              </div>
            </div>
            <div className="self-stretch h-[72px] px-4 py-3 flex justify-between items-center gap-2">
              <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search for another location"
                className="flex-1 h-full bg-[#eff2f4] border border-gray-300 rounded-l-md px-4 py-2 text-[#111616] text-sm outline-none"
              />
              <button
                onClick={() => handleSelection({ name: searchValue })}
                className="h-full bg-[#111616] text-white px-4 rounded-r-md hover:bg-gray-800 transition"
              >
                <i className="fas fa-search text-lg" />
              </button>
            </div>
            {filteredResults.length > 0 && (
              <div className="self-stretch bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
                {filteredResults.map((item) => (
                  <div
                    key={item.name}  
                    onClick={() => handleSelection(item)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
            <div className="self-stretch h-[203px] p-4 flex-col justify-start items-start flex">
              <div className="self-stretch rounded-xl justify-between items-start inline-flex">
                <div className="w-[608px] h-[171px] flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-[#637c87] text-sm">
                    Updated at {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hourCycle: 'h24' })+' |'}
                    {temperature}°C
                  </div>
                </div>
                <img className="h-[171px] relative rounded-xl" src={weatherIcon} alt="Weather" />
              </div>
            </div>
            <div className="self-stretch h-[400px] p-4 flex-col justify-start items-start flex">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid stroke="#222" strokeDasharray="5 5" />
                  <XAxis dataKey="time" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#222', color: '#fff' }} />
                  <Legend wrapperStyle={{ color: '#fff' }} />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#39FF14" 
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    stroke="#3498db" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
