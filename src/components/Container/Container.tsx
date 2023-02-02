import "Phone.css";
import "InfoMessage.css";
import "./Actions.css";
import "./Keyboard.css";
import "./Container.css";
import Phone from "../Phone/Phone";
import InfoMessage from "../InfoMessage/InfoMessage";
import Actions from "../Actions/Actions";
import Keyboard from "../Keyboard/Keyboard";

const Container = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Phone />
        <InfoMessage />
        <Actions />
        <Keyboard />
      </div>
      ;
    </>
  );
};

export default Container;
