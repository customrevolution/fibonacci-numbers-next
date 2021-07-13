import classes from "../styles/Sequence.module.css";

const Sequence = (props) => {
  return (
    <div className={classes.sequence}>
      <ul>
        {props.fibNumbers.map((number) => (
          <li className={classes.sequenceListItem} key={number}>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sequence;
