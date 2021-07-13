import { useState } from "react";
import Sequence from "./Sequence";
import classes from "../styles/FibonacciNumbers.module.css";

const FibonacciNumbers = () => {
  const [fibNumbers, setFibNumbers] = useState([]);
  const [alert, setAlert] = useState("*n u m b e r s*");

  const getFibNumbersTo = (numberTo) => {
    const fibNumbers = [0, 1];

    if (numberTo == 0) return [];

    if (numberTo == 1) return [0];

    if (numberTo > 5000) {
      setAlert("Enter a lower number!");
      return [];
    } else setAlert("*n u m b e r s*");

    for (let i = 2; i < numberTo; i++) {
      fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }

    return fibNumbers;
  };

  const handleChange = (numberToSequence) => {
    const sequenceNumbers = getFibNumbersTo(numberToSequence.target.value);
    setFibNumbers([...sequenceNumbers]);
  };

  return (
    <section className={classes.input}>
      <h1>Fibonacchi number sequence</h1>

      <div>
        <label htmlFor="fibNumber">{alert}</label>
        <input type="number" id="fibNumber" onChange={handleChange} />
      </div>

      <Sequence fibNumbers={fibNumbers} />
    </section>
  );
};
export default FibonacciNumbers;
