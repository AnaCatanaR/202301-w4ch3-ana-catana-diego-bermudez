import Actions from "./components/Actions/Actions";
import Container from "./components/Container/Container";
import InfoMessage from "./components/InfoMessage/InfoMessage";
import Phone from "./components/Phone/Phone";

const App = (): JSX.Element => {
  return (
    <>
      <Container />
      <Phone />
      <InfoMessage />
      <Actions />
    </>
  );
};

export default App;
