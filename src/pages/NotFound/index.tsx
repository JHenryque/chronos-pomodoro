import { useEffect } from "react";
import GenericHtml from "../../components/GenericHtml";
import Heading from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import MainTemplate from "../../templates/MainTemplate";

export function NotFound() {
  useEffect(() => {
    document.title = "Página não encontrada - Chronos Pomodoro";
  }, []);

  return (
    <MainTemplate>
      <GenericHtml>
        <Heading>404 Not Found</Heading>
        <p>Página não encontrada</p>
        <p>
          Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
          segurança para a <a href="/">página principal</a> ou{" "}
          <a href="/history">para o histórico</a> — ou pode ficar por aqui e
          fingir que achou uma página secreta que só os exploradores mais legais
          conseguem acessar. 🧭✨ segurança para a{" "}
          <RouterLink href="/">página principal</RouterLink> ou{" "}
          <RouterLink href="/history/">para o histórico</RouterLink> — ou pode
          ficar por aqui e fingir que achou uma página secreta que só os
          exploradores mais legais conseguem acessar. 🧭✨
        </p>
      </GenericHtml>
    </MainTemplate>
  );
}
