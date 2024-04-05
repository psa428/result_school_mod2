import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <div className="main-container" >
        <p>Главный контейнер</p>
        <div className='display-container'>
          контейнер дисплея
        </div>
        <div className='keyboard-container'>
          Контейнер клавиатуры
          <br/>
          <button className='button' key={1}>1</button>
        </div>

      </div>
    </div>

  );
}

export default App;
