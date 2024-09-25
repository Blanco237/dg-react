import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";
import Header from "../../components/header/header";

function Counter() {


  
  const [count, setCount] = useState(0);
  const [magnitude, setMagnitude] = useState(1);
  
  useEffect(() => {
    console.log('Rendering Counter')
  }, [count])

  function subtract() {
    const newVal = count - magnitude;
    setCount(newVal);
  }

  function add() {
    const newVal = count + magnitude;
    setCount(newVal);
  }

  return (
    <div className={styles.body}>
      <Header />
      <h1>{count}</h1>
      <input
        type="number"
        placeholder="Magnitude"
        value={magnitude}
        onChange={(e) => setMagnitude(Number(e.target.value))}
      />
      <div className={styles.btns}>
        <button onClick={subtract}>Subtract(-)</button>
        <button onClick={add}>Add(+)</button>
      </div>
    </div>
  );
}

export default Counter;
