

import React, {useState} from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=> setCount (count + 1)}> Press to increase </button>
      <button onClick={()=> setCount(count - 1)}> Press to decrease</button>
    </div>
  );
}

export default App