import { useState } from 'react';
import './App.css';


function update(s, setVal, setErr) {
  let isValid = true;
  for(let c of s) {
    if(c !== '0' && c !== '1'){
      isValid = false;
      break;
    }
  }

  if(isValid) {
    setVal(parseInt(s, 2));
    setErr("");
  }
  else {
    setErr("The input is not binary.");
  }
}


function App() {
  const [binVal, setBinVal] = useState("");
  const [decVal, setDecVal] = useState("");
  const [err, setErr] = useState("");

 return (
  <main>
      <h1>Binary to Decimal</h1>
      <label>Binary</label>
      <label>Decimal</label>
      <input
        value={binVal}
        onChange={(e) => {setBinVal(e.target.value);}}
      />
      <input
        value={decVal}
        onChange={(e)=>{setDecVal(e.target.value);}}
      />
      <span className='msg-error'>{err}</span>
      <button onClick={() => {update(binVal, setDecVal, setErr)}}>Convert</button>
    </main>
 )
}

export default App;
