import { useState } from "react";
import { FinishShopButton, FinishShopContainer, PaymentDetails } from "./style";
import sendEmailWithLink from "@/utils/SendEmail/EmailWithLink";
/*
  1 - Abrir
  2 - Parcelar
  3 - Declarar
  4 - Cancelar
  5 - Alterar
*/

const FinishShop = (props: any) => {
  const productId = props.productInfo.id;
  const [isfirstClick, setIsFirstClick] = useState(true);
  console.log("props", props);
  const onClick = () => {
    if (isfirstClick) {
      if (productId === 5 || productId === 4 || productId === 2) {
        sendEmailWithLink(
          "06.469.508/0001-10",
          props.senderData,
          props.cnpjData,
          props.adressData,
          props.productInfo,
          ""
        );
      }

      if (productId === 1) {
        sendEmailWithLink(
          "",
          props.senderData,
          props.cnpjData,
          props.adressData,
          props.productInfo,
          ""
        );
      }

      if (productId === 3) {
        sendEmailWithLink(
          "",
          props.senderData,
          "",
          props.adressData,
          props.productInfo,
          props.invoicingData
        );
      }
      setIsFirstClick(false);
    }
  };

  return (
    <FinishShopContainer>
      <h1>Realize o pagamento da sua compra clicando no link abaixo:</h1>
      {productId === 1 && (
        <FinishShopButton
          href="https://pag.ae/7Z2NVLBEn"
          target="_blank"
          onClick={onClick}
        >
          Realizar pagamento
        </FinishShopButton>
      )}

      {productId === 2 && (
        <FinishShopButton
          href="https://pag.ae/7Z2NWabxN"
          target="_blank"
          onClick={onClick}
        >
          Realizar pagamento
        </FinishShopButton>
      )}

      {productId === 3 && (
        <FinishShopButton
          href="https://pag.ae/7Z2NVjMen"
          target="_blank"
          onClick={onClick}
        >
          Realizar pagamento
        </FinishShopButton>
      )}

      {productId === 4 && (
        <FinishShopButton
          href="https://pag.ae/7Z6TX9jm5"
          target="_blank"
          onClick={onClick}
        >
          Realizar pagamento
        </FinishShopButton>
      )}

      {productId === 5 && (
        <FinishShopButton
          href="https://pag.ae/7Z6TXW-um"
          target="_blank"
          onClick={onClick}
        >
          Realizar pagamento
        </FinishShopButton>
      )}

      <p>
        Assim que sua compra for finalizada, nossa equipe entrara em contato em
        um prazo de até 48 horas da confirmação de seu pagamento.
      </p>

      <p>
        Se ainda tiver alguma duvida, entre em contato conosco pelo telefone, ou
        acesse nossa pagina de consultoria.
      </p>
    </FinishShopContainer>
  );
};

export default FinishShop;
