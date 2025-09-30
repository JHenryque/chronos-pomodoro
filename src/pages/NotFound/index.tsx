import GenericHtml from "../../components/GenericHtml";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <GenericHtml>
        <Heading>404 Not Found</Heading>
      </GenericHtml>
    </MainTemplate>
  );
}
