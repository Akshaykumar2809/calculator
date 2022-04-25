import React, {useState} from 'react';
import './App.css';

function App() {

  const [opStr, setOpStr] = useState("0");

  function addToOp(operand){
    console.log(operand);
    console.log(opStr);
    if(opStr==='0')setOpStr(operand)
    else setOpStr(opStr+operand);
  }
  const calculate = ()=> {
    
    setOpStr(eval(opStr).toString());
  }

  return (
    <div className="container">
      <div id='display'>{opStr}</div>

      <div className="Keypad">
        <button onClick={()=>setOpStr("0")} id="AC">AC</button>
        <button onClick={()=>addToOp('/')} id="divide" class="btn">/</button>
        <button onClick={()=>addToOp('*')} id="multiple" className="btn">*</button>
        <button onClick={()=>addToOp('7')} id="seven" className="btn">7</button>
        <button onClick={()=>addToOp('8')} id="eight" className="btn">8</button>
        <button onClick={()=>addToOp('9')} id="nine" className="btn">9</button>
        <button onClick={()=>addToOp('-')} id="minus" className="btn">-</button>
        <button onClick={()=>addToOp('4')} id="four" className="btn">4</button>
        <button onClick={()=>addToOp('5')} id="five" className="btn">5</button>
        <button onClick={()=>addToOp('6')} id="six" className="btn">6</button>
        <button onClick={()=>addToOp('+')} id="add" className="btn">+</button>
        <button onClick={()=>addToOp('1')} id="one" className="btn">1</button>
        <button onClick={()=>addToOp('2')} id="two" className="btn">2</button>
        <button onClick={()=>addToOp('3')} id="three" className="btn">3</button>
        <button onClick={()=>calculate()}  id="equal">=</button>
        <button onClick={()=>addToOp('0')} id="zero" className="btn">0</button>
        <button onClick={()=>addToOp('.')} id="decimal" className="btn">.</button>
      </div>
    </div>
  );
}

export default App;
