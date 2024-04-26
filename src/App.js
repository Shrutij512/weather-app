
import './App.css';
import WeatherDash from './Components/WeatherApp/WeatherDash';

function App() {
  return (
    <div className="App bg-gradient-to-r from-cyan-800 to-blue-500 w-[60%] h-[90%] absolute top-[5%] left-[20%]">
      <WeatherDash />
    </div>
  );
}

export default App;
