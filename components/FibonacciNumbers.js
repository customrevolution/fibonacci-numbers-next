import { useState } from "react";
import Sequence from "./Sequence";
import classes from "../styles/FibonacciNumbers.module.css";

const FibonacciNumbers = () => {
  const [fibNumbers, setFibNumbers] = useState([]);
  const [alert, setAlert] = useState("*n u m b e r s*");

  const newFibNumbers = (index, numberTo, fibNumbers) => {
    if (numberTo == 0) return [];

    if (numberTo == 1) return [0];

    if (numberTo > 5000) {
      setAlert("Enter a lower number!");
      return [];
    } else setAlert("*n u m b e r s*");

    if (index < numberTo) {
      fibNumbers[index] = fibNumbers[index - 1] + fibNumbers[index - 2];
      newFibNumbers(index + 1, numberTo, fibNumbers);
    }

    return [fibNumbers[numberTo - 1]];
  };

  const getFibNumber = (numberTo) => {
    const fibNumbers = [0, 1];

    if (numberTo == 0) return [];

    if (numberTo == 1) return [1];

    for (let i = 2; i <= numberTo; i++) {
      fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    }

    return [fibNumbers[numberTo]];
  };

  const handleChange = (numberToSequence) => {
    // setFibNumbers(newFibNumbers(2, numberToSequence.target.value, [0, 1]));
    setFibNumbers(getFibNumber(numberToSequence.target.value));
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
