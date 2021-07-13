import SequenceNumber from "./SequenceNumber";

function Sequence(props) {
  return (
    <div className="sequence">
      <ul>
        {props.fibNumbers.map((number) => (
          <SequenceNumber number={number}></SequenceNumber>
        ))}
      </ul>
    </div>
  );
}
export default Sequence;
