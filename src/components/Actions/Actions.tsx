import "./Actions.css";
import Display from "../Display/Display";

interface ActionsProps {
  numberDisplay: string;
}

const Actions = ({ numberDisplay }: ActionsProps): JSX.Element => {
  return (
    <div className="actions">
      <Display number={numberDisplay} />
      <a href="call" className="call">
        Call
      </a>
      <a href="hang-up" className="hang active">
        Hang up
      </a>
    </div>
  );
};

export default Actions;
