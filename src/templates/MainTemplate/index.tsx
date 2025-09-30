import Container from "../../components/Container/Container";
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
      </Container>

      <Container>{children}</Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
