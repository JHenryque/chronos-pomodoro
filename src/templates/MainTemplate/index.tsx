import { Timer } from "lucide-react";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

type MainTemplateProps = {
  children: React.ReactNode;
};

export default function MainTemplate({ children }: MainTemplateProps) {
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
      </Container>

      <Container>{children}</Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
