import Actions from "./components/Actions/Actions";
import Container from "./components/Container/Container";
import Phone from "./components/Phone/Phone";
import InfoMessage from "./components/InfoMessage/InfoMessage";

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
