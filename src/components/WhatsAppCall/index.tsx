import { WhatsAppCallContainer } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCall = () => {

  return (
    <WhatsAppCallContainer
      href=" https://api.whatsapp.com/send/?phone=5531973224040"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </WhatsAppCallContainer>
  );
};

export default WhatsAppCall;
