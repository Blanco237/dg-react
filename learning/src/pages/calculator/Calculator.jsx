import React, { useState } from "react";
import styles from "./calc.module.css";

const Calculator = () => {
  const [output, setOutput] = useState('');

  const updateOutput = (symbol) => {
    const newOutput = `${output}${symbol}`
    setOutput(newOutput)
  }

  const getResult = () => {
    const result = window.eval(output);
    setOutput(result);
  }

  const removeLastEntry = () => {
    setOutput(output.slice(0, -1))
  }

  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.output}>
        {output}
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => setOutput('')}>Ac</Button>
          <Button onClick={removeLastEntry}>
            <Back />
          </Button>
          <Button onClick={() => updateOutput('/')}>/</Button>
          <Button onClick={() => updateOutput('*')}>*</Button>
          <Button onClick={() => updateOutput('7')}>7</Button>
          <Button onClick={() => updateOutput('8')}>8</Button>
          <Button onClick={() => updateOutput('9')}>9</Button>
          <Button onClick={() => updateOutput('-')}>-</Button>
          <Button onClick={() => updateOutput('4')}>4</Button>
          <Button onClick={() => updateOutput('5')}>5</Button>
          <Button onClick={() => updateOutput('6')}>6</Button>
          <Button onClick={() => updateOutput('+')}>+</Button>
          <Button onClick={() => updateOutput('1')}>1</Button>
          <Button onClick={() => updateOutput('2')}>2</Button>
          <Button onClick={() => updateOutput('3')}>3</Button>
          <Button onClick={getResult}>=</Button>
          <Button onClick={() => updateOutput('0')}>0</Button>
          <Button onClick={() => updateOutput('.')}>.</Button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

const Back = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.53481 3H20.9998C21.265 3 21.5194 3.10536 21.7069 3.29289C21.8945 3.48043 21.9998 3.73478 21.9998 4V20C21.9998 20.2652 21.8945 20.5196 21.7069 20.7071C21.5194 20.8946 21.265 21 20.9998 21H6.53481C6.37022 21 6.20816 20.9594 6.06303 20.8818C5.91789 20.8042 5.79416 20.6919 5.70281 20.555L0.36981 12.555C0.260171 12.3907 0.20166 12.1975 0.20166 12C0.20166 11.8025 0.260171 11.6093 0.36981 11.445L5.70281 3.445C5.79416 3.30808 5.91789 3.19583 6.06303 3.11821C6.20816 3.04058 6.37022 2.99998 6.53481 3ZM7.06981 5L2.40381 12L7.06981 19H19.9998V5H7.06981ZM12.9998 10.586L15.8278 7.757L17.2428 9.172L14.4138 12L17.2428 14.828L15.8278 16.243L12.9998 13.414L10.1718 16.243L8.75681 14.828L11.5858 12L8.75681 9.172L10.1718 7.757L12.9998 10.586Z"
        fill="#A5A5A5"
      />
    </svg>
  );
};