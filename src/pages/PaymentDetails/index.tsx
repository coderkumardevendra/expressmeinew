import axios from "@/api/api";
import AppLayout from "@/layouts/App";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PaymentDetailsContainer, PaymentCustomerContainer } from "./styles";
import { Helmet } from "react-helmet";
import { ConsultPageHeaderContainer } from "../Consult/styles";
import { Alert, Button, Chip, Snackbar, TextField } from "@mui/material";

const PaymentDetails = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState<any>();
  const [open, setOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setOpen(true);
  };

  const calculateInstallmentsValue = (amount: number, installments: number) => {
    const ammountInPattern = amount / 100;
    const installmentsValue = ammountInPattern / installments;
    return installmentsValue;
  }

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const { data } = await axios.get(`/payment/${id}`);
        setPayment(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayment();
  }, []);

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
        <h1>Pedido realizado</h1>
        <p>
          Muito obrigado por comprar conosco, sua compra foi registrada com
          sucesso !
          <br />
          Caso o pagamento seja pix ou boleto, siga as intruções abaixo.
        </p>
      </ConsultPageHeaderContainer>
      <PaymentCustomerContainer>
        <div className="container">
          <h2>Comprador</h2>
          <p>Nome: {payment?.customer.name ? payment?.customer.name : ""}</p>
          <p>Email: {payment?.customer.email ? payment?.customer.email : ""}</p>
        </div>

        <div className="container">
          <h2>Item</h2>
          <p>
            {payment?.items[0].description ? payment?.items[0].description : ""}
          </p>
          <p>
            Valor: {payment?.amount ? "R$ " + payment?.amount / 100 + "0" : ""}
          </p>
          <p>
            Status:
            {payment?.charges[0].status === "paid" && (
              <Chip
                label="Pago"
                color="success"
                variant="outlined"
                sx={{ ml: 1 }}
              />
            )}
            {payment?.charges[0].status === "pending" && (
              <Chip
                label="Pendente"
                color="warning"
                variant="outlined"
                sx={{ ml: 1 }}
              />
            )}
            {payment?.charges[0].status === "refunded" && (
              <Chip
                label="Estornado"
                color="error"
                variant="outlined"
                sx={{ ml: 1 }}
              />
            )}
            {payment?.charges[0].status === "canceled" && (
              <Chip
                label="Cancelado"
                color="error"
                variant="outlined"
                sx={{ ml: 1 }}
              />
            )}
            {payment?.charges[0].status === "refused" && (
              <Chip
                label="Recusado"
                color="error"
                variant="outlined"
                sx={{ ml: 1 }}
              />
            )}
            {payment?.charges[0].status === "failed" && (
              <Chip
                label="Falha"
                color="error"
                variant="outlined"
                sx={{ ml: 1 }}
              />
            )}
          </p>
        </div>
      </PaymentCustomerContainer>

      <PaymentDetailsContainer>
        {payment?.charges[0].payment_method === "pix" && (
          <div className="pix">
            <Alert severity="info">
              Seu link de pagamento expira em 24 Horas ápos recebimento do
              pedido
            </Alert>

            <div className="payment_details">
              <img
                src={payment?.charges[0].last_transaction.qr_code_url}
                alt="QR code para pagamento do pix"
              />

              <p>
                Escaneie o QR code acima ou copie o código abaixo para finalizar
                seu pagamento
              </p>

              <div className="payment_url">
                <TextField
                  label="Chave Pix"
                  value={payment?.charges[0].last_transaction.qr_code_url}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    copyToClipboard(
                      payment?.charges[0].last_transaction.qr_code_url
                    )
                  }
                  fullWidth
                >
                  Copiar Pix
                </Button>
              </div>

              <p>
                Após o pagamento, em até 24 horas, nossa equipe entrará em
                contato com você !
              </p>
            </div>
          </div>
        )}

        {payment?.charges[0].payment_method === "boleto" && (
          <div className="boleto">
            <Alert severity="info">
              Seu pedido foi registrado, e será realizado após a confirmação do
              pagamento do boleto
            </Alert>

            <div className="payment_details">
              <a
                href={payment?.charges[0].last_transaction.pdf}
                target="_blank"
                rel="noreferrer"
              >
                Abrir Boleto
              </a>

              <p>
                Clique no link para visualizar o boleto ou copie o código do boleto e pague-o para
                finalizar seu pedido
              </p>

              <div className="payment_url">

              <TextField
                  label="Código de Barras"
                  value={payment?.charges[0].last_transaction.line}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
        
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    copyToClipboard(payment?.charges[0].last_transaction.line)
                  }
                  fullWidth
                >
                  Copiar Código de Barras
                </Button>
              </div>

              <p>
                Após o pagamento, em até 24 horas, nossa equipe entrará em
                contato com você !
              </p>
            </div>
          </div>
        )}

        {payment?.charges[0].payment_method === "credit_card" && (
          <div className="credit_card">
            {payment?.status === "paid" && (
              <div className="payment_details">
                <Alert severity="success">
                  Seu pagamento foi realizado com sucesso !
                </Alert>
              </div>
            )}

            {payment?.status === "refunded" && (
              <div className="payment_details">
                <Alert severity="success">
                  Seu pagamento foi estornado com sucesso !
                </Alert>
              </div>
            )}

            {payment?.status === "pending_refund" && (
              <div className="payment_details">
                <Alert severity="warning">
                  Seu pagamento está pendente de estorno !
                </Alert>
              </div>
            )}

            {payment?.status === "refused" && (
              <div className="payment_details">
                <Alert severity="error">
                  Seu pagamento foi recusado, entre em contato com nossa equipe
                  para mais informações !
                </Alert>
              </div>
            )}

            {payment?.status === "failed" && (
              <div className="payment_details">
                <Alert severity="error">
                  Seu pagamento falhou, entre em contato com nossa equipe para
                  mais informações !
                </Alert>
              </div>
            )}

            {payment?.status === "pending" && (
              <div className="payment_details">
                <Alert severity="info">
                  Seu pagamento está pendente, aguarde a confirmação do mesmo !
                </Alert>
              </div>
            )}

            <div className="order-details">
              <div className="order-details__content">
                <h3>Status</h3>
                {payment?.status === "paid" && (
                  <Chip label="Pago com sucesso" color="success" />
                )}

                {payment?.status === "refunded" && (
                  <Chip label="Estornado com sucesso" color="success" />
                )}

                {payment?.status === "pending_refund" && (
                  <Chip label="Estorno pendente" color="warning" />
                )}

                {payment?.status === "refused" && (
                  <Chip label="Recusado" color="error" />
                )}

                {payment?.status === "pending" && (
                  <Chip label="Pendente" color="warning" />
                )}

                {payment?.status === "failed" && (
                  <Chip label="Falha" color="error" />
                )}
              </div>

              <div className="order-details__content">
                <h3>Valor total</h3>
                <p>
                  {payment?.amount ? "R$ " + payment?.amount / 100 + "0" : ""}
                </p>
              </div>

              <div className="order-details__content">
                <h3>Quantidade de parcelas</h3>
                <p>
                  Parcelado em{" "}
                  {payment?.charges[0].last_transaction.installments} x de R${" "}
                  {calculateInstallmentsValue(
                    payment?.amount,
                    payment?.charges[0].last_transaction.installments
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          message="Copiado com sucesso !"
          autoHideDuration={2000}
        />
      </PaymentDetailsContainer>
    </AppLayout>
  );
};

export default PaymentDetails;
