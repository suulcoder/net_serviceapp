import logo from './logo.svg';
import './App.css';

function getCurrentDate(){
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
  
    return (date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The time is:
        </p>
        <h2>
          {getCurrentDate()}
        </h2>
        <a
          className="App-link"
          href="https://uvg.instructure.com/courses/22069/files/3487964?wrap=1"
          target="_blank"
          rel="noopener noreferrer"
        >
           {"I am a " + getRandomInt(0,100) + "% sure"}
        </a>
      </header>
    </div>
  );
}

export default App;
