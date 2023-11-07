import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomcolor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );
  function Child({ onChangeColor }) {
    console.log(onChangeColor);
    return <div classname="child" style={{backgroundColor: "#FFF"}} />
  }
  console.log(onChangeColor);
  return (
    <div
      onClick={onChangeColor}
      className="child"
      style={{backgroundColor : "#FFF"}}
    />
  );
 }

export default Parent;
