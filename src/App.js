import "./App.css";

import myimage from "./images/iphone-icons.jpg";

function App() {
  return (
    <div className="App calculator">
      <header className="App-header">
        <div className="iphone-icons">
          <img src={myimage} alt="iphone icons" />
        </div>
        <p id="time">12:00</p>
      </header>

      <div className="results">
        <input type="number" />
      </div>

      <div className="buttons">
        <div>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>&divide;</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
