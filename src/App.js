import { useState } from "react";
import "./App.css";

function App() {
  const [text1, setText] = useState('')
  return (
    <div className="App">
      <input 
        onChange={(text1) => setText(text1.target.value)}
      />
      <p>{text1}</p>
    </div>
  );
}

export default App;
