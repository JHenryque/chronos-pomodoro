import { PlayCircleIcon, StopCircleIcon, Timer } from "lucide-react";
import Heading from "./components/Heading";
import "./styles/global.css";
import Container from "./components/Container/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu/Menu";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput/DefaultInput";
import Cycles from "./components/Cycles/Cycles";
import DefaultButton from "./components/DefaultBotton/DefaultButton";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

export default function App() {
  console.log("Hello App");

  const [button, setButton] = useState<boolean>(true);

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

        <form className="form">
          <div className="formRow">
            {/*  <DefaultInput abc={123} type="text" label="Task" /> iterxecion com a uniao */}

            <DefaultInput
              id="task"
              type="text"
              label="Task"
              placeholder="Digit a task"
              disabled
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            {button ? (
              <DefaultButton
                icon={<PlayCircleIcon />}
                color="green"
                onClick={() => setButton(true)}
              />
            ) : (
              <DefaultButton
                icon={<StopCircleIcon />}
                color="red"
                onClick={() => setButton(false)}
              />
            )}
          </div>
        </form>

        <Footer />
      </Container>
    </>
  );
}
