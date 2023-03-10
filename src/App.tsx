import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboard />
          <Actions numberDisplay={"666666666"} />
        </main>
      </div>
    </>
  );
};

export default App;
