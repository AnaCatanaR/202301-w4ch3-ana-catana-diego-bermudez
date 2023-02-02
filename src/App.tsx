import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Phone from "./components/Phone/Phone";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Phone />
        <Info />
        <Actions />
      </div>
    </>
  );
};

export default App;
