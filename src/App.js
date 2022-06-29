import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <input 
        onChange={(text) => setText(text.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}

export default App;
