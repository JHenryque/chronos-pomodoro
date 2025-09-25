import { Timer } from "lucide-react";
import Heading from "./components/Heading/Heading";
import "./styles/global.css";
import Container from "./components/Container/Container";

export default function App() {
  console.log("Hello App");
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
