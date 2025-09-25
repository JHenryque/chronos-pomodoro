import { Timer } from "lucide-react";
import Heading from "./components/Heading/Heading";
import "./styles/global.css";

export default function App() {
  console.log("Hello App");
  return (
    <>
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
    </>
  );
}
