import { useState } from "react";
import "./App.css";
import Item from "./content/Item";

function App() {
  const [text2, setText] = useState('')
  return (
    <div className="App">
      <input 
        onChange={(text2) => setText(text2.target.value)}
      />
      <p>{text2}</p>
      <Item name="Joseph" firstname="Eddy" nationalite="malagasy"/>
    </div>
  );
}

export default App;
