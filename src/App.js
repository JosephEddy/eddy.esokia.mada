import { useState } from "react";
import "./App.css";

function App() {
  const [text2, setText] = useState('')
  return (
    <div className="App">
      <input 
        onChange={(text2) => setText(text2.target.value)}
      />
      <p>{text2}</p>
    </div>
  );
}

export default App;
