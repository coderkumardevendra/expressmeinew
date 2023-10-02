import AppLayout from "@/layouts/App";
import { Button } from "@mui/material";
import {
  ConsultPageContainer,
  ConsultPageHeaderContainer,
  SendMessageContainer,
  SendMessageForm,
} from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import MettingSuccess from "@/assets/metting-success.png";

import ContactUsForm from "@/components/ContactUs";
import { Helmet } from "react-helmet";

export default function ConsultPage() {
  const sendWhatsAppMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=5531973224040&text=Olá, gostaria de uma consultoria!`
    );
  };

  const sendEmailMessage = () => {
    window.open(
      `mailto:contato@expressmei.com?subject=Consultoria Express MEI&body=Olá, gostaria de uma consultoria!`
    );
  };

  return (
    <AppLayout>
      <Helmet>
        <title>Express Mei | Consultoria</title>
        <meta
          name="description"
          content="Express MEI - Facilitando sua vida com confiança, praticidade e velocidade ! Faça sua consultoria personalizada agora mesmo."
        />
      </Helmet>
      <ConsultPageHeaderContainer data-aos="fade-up">
        <h1>Consultoria</h1>
        <p>
          Nossa equipe esta aqui para te ajudar em todos os processos
          relacionados ao MEI. Quer saber mais, ou tirar alguma dúvida ?
        </p>
      </ConsultPageHeaderContainer>

      <ConsultPageContainer data-aos="fade-up">
        <SendMessageContainer>
          <div>
            <h2>Mande uma mensagem</h2>
            <p>
              Mande uma mensagem para nossa equipe estaremos a disposição para
              te ajudar.
            </p>
            <div className="buttons">
              <Button
                startIcon={<FaWhatsapp />}
                variant="contained"
                onClick={sendWhatsAppMessage}
              >
                Fale Conosco
              </Button>
              <Button
                startIcon={<MdOutlineEmail />}
                variant="contained"
                onClick={sendEmailMessage}
              >
                Mande um e-mail
              </Button>
            </div>
          </div>

          <div className="image">
            <img
              src={MettingSuccess}
              alt="5 pessoas sentdas em uma mesa, com as maos se tocando no centro da mesa"
            />
          </div>
        </SendMessageContainer>
        <SendMessageForm>
          <h2>Deixe seu recado</h2>
          <p>
            Deixe um recado personalizado para nosso equipe, entraremos em
            contato o mais rápido possível para ajuda-lô.
          </p>

          <ContactUsForm />
        </SendMessageForm>
      </ConsultPageContainer>
    </AppLayout>
  );
}
