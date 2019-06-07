import React from "react";
import Hello from "./sayHello";
import Tweet from "./Tweet";
import TestState from "./state";
import Twee from "./twee";

function App() {
  const test = "button1";

  const sayHello = () => {
    alert("Hello");
  };

  return (
    <div className="App">
      <div className="fst">
        <h1>Hello React from App component.</h1>
        <button onClick={sayHello}>{test}</button>
        <div>
          <Hello />
        </div>
      </div>
      <div className="second">
        <Tweet name="John" likes="100k" message="hi there" />
        <Tweet name="Mosh" likes="50k" message="how are you?" />
        <Tweet name="MacroniWeb" likes="2.5m" message="hello boy" />
      </div>
      <div className="blk">
        <TestState />
      </div>
      <div>
        <Twee />
      </div>
    </div>
  );
}

export default App;
