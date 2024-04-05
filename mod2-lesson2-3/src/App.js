//import './App.css';
import { useState } from 'react';
import './index.css';

function App() {
  const digitalButtons = [
    {id: 1, val: 1},
    {id: 2, val: 2},
    {id: 3, val: 3},
    {id: 4, val: 4},
    {id: 5, val: 5},
    {id: 6, val: 6},
    {id: 7, val: 7},
    {id: 8, val: 8},
    {id: 9, val: 9},
    {id: 10, val: 0}
  ];
  const operButtons = [
    {id: 1, val: '+'},
    {id: 2, val: '-'},
    {id: 3, val: '='},
    {id: 4, val: 'C'}
  ];

  let  [inputStr, setInputStr] = useState('');
  let [expression, setExpression] = useState('');

  function clickDigital(val) {
    //  обработчик нажатия цифровой клавиши
    console.log(`Нажата клавиша ${val}`);
    
    setInputStr(inputStr += String(val));

   };

   function clickOper(val) {
    //  Обработка нажатия клавиши операции
    switch (val) {
      case 'C':
        setInputStr('');
        setExpression('');
        break;
      case '=' :
        console.log('Нажали кнопку <=>'); 
        setExpression(expression += inputStr);
        setInputStr(eval(expression));
        break;
    default :    
      console.log('Нажали кнопку <+>'); 
      setExpression(expression += inputStr + val);
      setInputStr('');
      break;


    };
  };

  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <div className="main-container" >
        
        <div className='display-container'>
          <div className='display-result'>{inputStr}</div>
          <div className='display-calc'>{expression}</div>
        </div>
        <div className='keyboard-container'>
          <div className='digital-button-container'>
            {
              digitalButtons.map((item, id) => {return <button className='button'  onClick={() => clickDigital(item.val)}>{item.val}</button>})
            }
          </div>
          <div className='control-button-container'>
            {
                operButtons.map((item, id) => {return <button className='oper-button' onClick={() => clickOper(item.val)}>{item.val}</button>})
            }
          </div>

          


          
        </div>
       

      </div>
    </div>

  );
}

export default App;
