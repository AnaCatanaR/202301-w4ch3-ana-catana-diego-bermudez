import "./Keyboard.css";
import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyTexts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          <li>
            {keyTexts.map((keyText, index) => (
              <Key
                key={index + 1}
                className={`key ${index === keyTexts.length - 1 ? "big" : ""}`}
                keyText={keyText}
              />
            ))}
          </li>
        </ol>
      </div>
    </>
  );
};

export default Keyboard;
