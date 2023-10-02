import PadlockIcon from "@/assets/padlock.png";
import { SecurityMessageContainer } from "./styles";


export default function SecurityMessage() {
  return (
    <SecurityMessageContainer className="warning">
      Todas as nossas transações são feitas de forma segura atráves da
      pagarme.
      <img src={PadlockIcon} alt="Icone de um cadeado fechado" />
    </SecurityMessageContainer>
  );
}
