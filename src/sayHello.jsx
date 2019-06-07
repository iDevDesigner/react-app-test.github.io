import React from "react";

function Hello() {
  const hello = () => {
    alert("hello from Say hello component");
  };
  return (
    <div>
      <button className="btn2" onClick={hello}>
        Say Hello
      </button>
    </div>
  );
}

export default Hello;
