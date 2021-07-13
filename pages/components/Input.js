import { useState } from "react";
import Sequence from "./Sequence";

import classes from "./Input.module.css";

function Input() {
  const [fibNumbers, setFibNumbers] = useState([]);

  function getFibNumbersTo(numberTo) {
    if (numberTo == 0) return [];

    if (numberTo == 1) return [0];

    if (numberTo > 5000) return [];

    const fibNumbers = [0, 1];

    for (let i = 2; i < numberTo; i++) {
      fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }
    return fibNumbers;
  }

  function handleChange(numberToSequence) {
    const sequenceNumbers = getFibNumbersTo(numberToSequence.target.value);
    setFibNumbers([...sequenceNumbers]);
  }

  return (
    <section>
      <div className={classes.label}>
        <label htmlFor="fibNumber">*n u m b e r s*</label>
      </div>

      <div className={classes.input}>
        <input type="number" id="fibNumber" onChange={handleChange} />
      </div>

      <Sequence fibNumbers={fibNumbers} />
    </section>
  );
}
export default Input;
