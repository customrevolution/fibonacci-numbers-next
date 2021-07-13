import classes from "../styles/Sequence.module.css";

const Sequence = (props) => {
  return (
    <div className={classes.sequence}>
      <ul>
        {props.fibNumbers.map((number) => (
          <li className={classes.sequenceListItem}>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sequence;
