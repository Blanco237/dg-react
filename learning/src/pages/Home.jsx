import React, { useEffect, useState } from "react";
import Header from "../components/header/header";

function Home() {
  const [arr, setArr] = useState([
    { name: "Blanco", age: 73 },
    { name: "Stuff", age: "23" },
  ]);
  const [average, setAverage] = useState(null);

  const addSomething = () => {
    setArr([
      ...arr,
      { name: "Something", age: Math.round(Math.random() * 100) },
    ]);
  };

  useEffect(function () {
    console.log("Arr as dependency , runs whenever it changes");
  }, []);

  useEffect(function () {
    let sum = 0;
    arr.forEach((person) => sum = sum + Number(person.age));
    const avg = sum / arr.length;
    setAverage(Math.round(avg))
  }, [arr])

  return (
    <>
      <Header />
      <div style={{ padding: "2rem" }}>
        {arr.map((val, index) => {
          return (
            <div style={{ display: "flex" }} key={`row_${index}`}>
              <p style={{ marginRight: "8px" }}>{val.name}</p>
              <p>{val.age}</p>
            </div>
          );
        })}
        <button onClick={addSomething}>Add</button>
        <div style={{ fontSize: "1rem", marginTop: '1rem', fontWeight: 'bold' }}>
          Average: {average ? average : "--"}
        </div>
      </div>
    </>
  );
}

export default Home;
