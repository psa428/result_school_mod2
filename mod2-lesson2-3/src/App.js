//import './App.css';
import { useState } from 'react';
import './index.css';

function App() {
  const digitalButtons = [
    { val: 1},
    { val: 2},
    { val: 3},
    { val: 4},
    { val: 5},
    { val: 6},
    { val: 7},
    { val: 8},
    { val: 9},
    { val: 0}
  ];
  const operButtons = [
    { val: '+'},
    { val: '-'},
    { val: '='},
    { val: 'C'}
  ];

  let  [inputStr, setInputStr] = useState('');
  let [expression, setExpression] = useState('');
  let [chColor, setChColor] = useState(false);

  function clickDigital(idx) {
    //  обработчик нажатия цифровой клавиши
    
    setInputStr(inputStr += digitalButtons[idx].val);
    setExpression(expression += digitalButtons[idx].val);
    
   };

   function clickOper(val) {
    //  Обработка нажатия клавиши операции
    switch (val) {
      case 'C':
        setInputStr('');
        setExpression('');
        setChColor(false);
        break;
      case '=' :
        setInputStr(clcResult(expression));
        setExpression(clcResult(expression));
        setChColor(true);      
        
        break;
    default :    
      setExpression(expression += String(val));
      setInputStr('');
      setChColor(false);
      break;
    };
  };

    function clcResult(z){
      // Вычисление результата
      let x = [''];
      
      let y = z.split('');
      let j = 0;
      for (let i = 0; i < y.length; i++ ){
        if (y[i] !== '+' && y[i] !== '-')
          x[j] += y[i];
        else {
          j++;
          x[j] = y[i];    
        };
          
      };

      return  x.reduce((sum, current) => sum + Number(current), 0);

    };


  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <div className="main-container" >
        
        <div className='display-container'>
          <div className={chColor ?'display-result': 'display'}>{inputStr}</div>
          <div className='display-calc'>{expression}</div>
        </div>
        <div className='keyboard-container'>
          <div className='digital-button-container'>
            {
              // digitalButtons.map((item, id) => {return <button className='button'  onClick={() => clickDigital(item.val)}>{item.val}</button>})
              digitalButtons.map((item, idx) => (
                <button key={idx} className='button' onClick={() => clickDigital(idx)}>
                {item.val}
                </button>
                ))
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
