import Landing from './components/formTown';
import Weather from './components/showWeather'
import MyWeather from './components/showMyWeather';
import ShowingWeather from './components/myWeather'
import './App.css';

function App() {
  return <div>


    <div className="box-myW">
      <div className='myWeather'>
      <MyWeather />
        <ShowingWeather />

      </div>
      <div className="weather">
        <Landing />
        <Weather />
      </div>

    </div>



  </div>;
}

export default App;
