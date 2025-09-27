import { Timer } from "lucide-react";
import Heading from "./components/Heading";
import "./styles/global.css";
import Container from "./components/Container/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu/Menu";
import CountDown from "./components/CountDown";
import Form from "./components/Form/Form";

export default function App() {
  console.log("Hello App");
  return (
    <>
      <Container>
        <Logo />
        <Menu />
        <Heading>
          Ola Mundo{" "}
          <button
            onClick={() =>
              confirm("Tem ceteza que deseja clickar?")
                ? alert("Ola Mundo Henrique")
                : null
            }
          >
            <Timer />
          </button>
        </Heading>
        <CountDown />
        <Form />
      </Container>
    </>
  );
}
