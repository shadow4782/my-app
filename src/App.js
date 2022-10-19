import { useState } from 'react';
import './App.css';



function App () {
    const [calculation, setCalculation] = useState("");
    const [result, setResult ] =useState("");
    const operators =['/','*','+','-','.',]
    
    
const createDigits= () => {
    const digits=[];
    for (let i = 1; i < 10;i++){
        digits.push(
            <button 
            onClick={() => updatecalculation(i.toString())}
            key={i}>
                {i}
            </button>
        )
}
return digits;
}
const deleteLast = () => {
    if (calculation == '') {
        return;
    }
    const value = calculation.slice(0, -1 );
    setCalculation(value);
}
const updatecalculation = value => {
    setCalculation(calculation+value);
  
setCalculation(calculation+value);

if (!operators.includes(value)) {
    setResult(eval(calculation+value).toString());
}


}
const calculate = () => {
    setCalculation(eval(calculation).toString())
}
  return (
      <div className="App">
          <div className="calculator">
          <div className="Display">     
                  {result ? <span>({result})</span>: ''} {calculation || "0"}
              </div>
              <div className="operators"> 
              <button onClick={() => updatecalculation('/')} >/</button>
              <button onClick={() => updatecalculation('*')}>*</button>
              <button onClick={() => updatecalculation('+')}>+</button>
              <button onClick={() => updatecalculation('-')}>-</button>

              <button onClick={deleteLast}>DEL</button>
              </div>
              <div className="digits">
                  { createDigits() }
                 
              <button onClick={() => updatecalculation('0')}>0</button>
              <button onClick={() => updatecalculation('.')} >.</button>
              <button onClick={calculate} >=</button>
              

              
              </div>

              </div>
              </div>



  );
  }
export default App;


