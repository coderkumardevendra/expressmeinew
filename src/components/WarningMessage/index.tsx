import { WarningMessage } from "./styles";

export default function Warning() {
  return (
    <WarningMessage className="container">
      <p>
        Todos os processos desse site são <span>privados</span> e{" "}
        <span>opcionais</span>, nosso site e profissionais têm o objetivo de te
        assessorar durante os processos listados no site envolvendo o MEI. Os
        procedimentos desse site podem ser feitos pelos orgãos públicos do
        governo gratuitamente, do qual o site expressmei.com não faz parte.
      </p>
    </WarningMessage>
  );
}
