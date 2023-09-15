import "./App.css";
import { useState } from "react";

function App() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");
  function swapColors() {
    setColor1(color2);
    setColor2(color1);
  }
  return (
    <div className="App">
      <div
        style={{ height: "200px", width: "200px", backgroundColor: color1 }}
        onClick={swapColors}
      ></div>
      <div
        style={{ height: "200px", width: "200px", backgroundColor: color2 }}
        onClick={swapColors}
      ></div>
    </div>
  );
}

export default App;
