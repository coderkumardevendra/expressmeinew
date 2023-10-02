import { createClient } from '@supabase/supabase-js';
import showErrorDialog from '@/utils/Alerts/ErrorAlert';
import axios from "@/api/api";
import { generateRandomNumber, removeNonNumericCharacters, removeWhiteSpace } from '../string';
import sendPaymentConfirmEmail from '../SendEmail/EmailWithCNPJ';

const createPaymentObject = (paymentType: any, creditCardInfo: any, payment: any) => {
  let paymentObject;
  if (paymentType === "pix") {
    paymentObject = [
      {
        payment_method: 'pix',
        pix: {
          expires_in: '86400',
        },
      }
    ]
  }

  if (paymentType === "boleto") {
    paymentObject = [
      {
        payment_method: 'boleto',
        boleto: {
          instructions: 'Pagar até o vencimento',
          type: "DM",
          document_number: generateRandomNumber(),
        },
      }
    ]
  }

  if (paymentType === "creditCard") {
    paymentObject = [
      {
        credit_card: {
          card: {
            number: removeWhiteSpace(creditCardInfo.number),
            holder_name: creditCardInfo.name,
            exp_month: creditCardInfo.expirationMonth,
            exp_year: creditCardInfo.expirationYear,
            cvv: creditCardInfo.cvv,
            billing_address: {
              country: "BR",
              state: payment.state,
              city: payment.city,
              zip_code: removeNonNumericCharacters(payment.cep),
              line_1: `${payment.number},${payment.street},${payment.neighborhood}`,
              line_2: payment.complement ? payment.complement : "",
            },
          },
          installments: +creditCardInfo.installments,
          statement_descriptor: 'EXPRESSMEI'
        },
        payment_method: 'credit_card'
      }
    ];
  }

  return paymentObject;
};

const supabseHost = import.meta.env.VITE_HOST_SUPABASE; 
const supabaseKey = import.meta.env.VITE_ANON_KEY_SUPABASE;

const supabase = createClient(
  supabseHost,
  supabaseKey
);

const createPayment = async (payment: any, productInfo: any, paymentType: any, creditCardInfo: any, token: string) => {
  try {
    if (!creditCardInfo && paymentType === "creditCard") throw new Error("Erro ao realizar o pagamento, dados do cartão inválidos");

    const paymentObject = createPaymentObject(paymentType, creditCardInfo, payment);
    let finalObject = {
      items: [{
        amount: productInfo.amount,
        description: productInfo.description,
        quantity: productInfo.quantity,
        code: productInfo.code,
      }],
      customer: {
        name: payment.name + " " + payment.lastname,
        email: payment.email,
        type: "individual",
        document: removeNonNumericCharacters(payment.cpf),
        phones: {
          home_phone: {
            country_code: "55",
            area_code: payment.numberPhone.replace("(","").replace(")","").substring(0, 2),
            number: payment.numberPhone.substring(5).replace("-",""),
          },
          mobile_phone: {
            country_code: "55",
            area_code: payment.numberCelphone.replace("(","").replace(")","").substring(0, 2),
            number: payment.numberCelphone.substring(5).replace("-",""),
          },
        },
        address: {
          country: "BR",
          state: payment.state,
          city: payment.city,
          zip_code: removeNonNumericCharacters(payment.cep),
          line_1: `${payment.number},${payment.street},${payment.neighborhood}`,
          line_2: payment.complement ? payment.complement : "",
        },
      },
      payments: paymentObject,
    };
    const { data } = await axios.post("/payment", {
      finalObject,
      token,
    });
    return data;
  } catch (error: any) {
    if (!creditCardInfo && paymentType === "creditCard") {
      showErrorDialog("Erro ao realizar o pagamento !", error.message);
      return;
    }
    showErrorDialog("Erro ao realizar o pagamento", "Ocorreu um erro ao realizar o pagamento, tente novamente mais tarde.")
  }
};

const sendPayment = async (payment: any, productInfo: any, paymentType: any, creditCardInfo: any, token: string) => { 
  try {
    const data = await createPayment(payment, productInfo, paymentType, creditCardInfo, token);

    if (data.status === "refused" || data.status === "failed") throw new Error("Erro ao realizar o pagamento, tente novamente mais tarde");

    localStorage.setItem("last_payment", data.id);
    await supabase
      .from("payment_data")
      .insert({
        user_info: payment,
        product_info: productInfo,
        payment_info: data,
        order_id: data.id,
      });
    await sendPaymentConfirmEmail(payment, productInfo, paymentType);
    return data.id;
  } catch (error) {
    console.error(error);
  }
};

export default sendPayment;