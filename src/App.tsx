import Actions from "./components/Actions/Actions";
import Container from "./components/Container/Container";
import InfoMessage from "./components/InfoMessage/InfoMessage";

const App = (): JSX.Element => {
  return (
    <>
      <Container />
      <InfoMessage />
      <Actions />
    </>
  );
};

export default App;
