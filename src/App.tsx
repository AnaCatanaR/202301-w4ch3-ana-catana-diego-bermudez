import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import "./App.css";
import { useState } from "react";

const App = (): JSX.Element => {
  let [numberDisplay, setNumberDisplay] = useState("609272100");
  const numberToAdd = (keyNumber: string) => {
    setNumberDisplay((numberDisplay = numberDisplay.concat(keyNumber)));
  };

  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboard />
          <Actions numberDisplay={numberDisplay} />
        </main>
      </div>
    </>
  );
};

export default App;
