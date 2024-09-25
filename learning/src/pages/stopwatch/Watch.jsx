import React, { useEffect, useState } from "react";
import styles from "./watch.module.css";

const Watch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [t, setT] = useState();

  const pad = (n) => {
    return String(n).padStart(2, "0");
  };


  useEffect(() => {
    if(seconds >= 60) {
        setMinutes((m) => m + 1)
        setSeconds(0);
    }
  }, [seconds])

  useEffect(() => {
    if(minutes >= 60) {
        setHours(h => h+1);
        setMinutes(0);
        setSeconds(0);
    }
  }, [minutes])

  const start = () => {
    const _t = setInterval(() => {
        setSeconds((secs) => secs + 1);
      }, 1);
  
      setT(_t);
  }

  const pause = () => {
    clearInterval(t)
  }

  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <section className={styles.body}>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
      <div className={styles.container}>
        <div>
          {pad(hours)}
          <span>Hours</span>
        </div>
        :
        <div>
          {pad(minutes)}
          <span>Minutes</span>
        </div>
        :
        <div>
          {pad(seconds)}
          <span>Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default Watch;
