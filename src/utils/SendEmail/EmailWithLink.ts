import axios from "axios";

const takeTrueValuesFromObject = (object: any) => {
  const trueValues = Object.keys(object).filter((key) => object[key]);
  return trueValues;
};



// Email used when the user buy the 'alter mei', 'cancel mei', 'installment mei' services.
const sendEmailWithLink = async (
  CNPJ: string,
  personalData: any,
  cnpjData: any,
  adressData: any,
  billingData: any,
  invoicingData: any,
) => {
  try {
    axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_m2ay99e",
      template_id: "template_24begti",
      user_id: "cF2X-20hKfOUWyWnq",
      template_params: {
        client_cnpj: CNPJ ? CNPJ : "CNPJ não necessário para este serviço",
        client_name: personalData.name,
        client_lastname: personalData.lastname,
        client_mother: personalData.motherName,
        client_cpf: personalData.cpf,
        client_rg: personalData.rg,
        client_uf: personalData.ufRg,
        client_born_date: new Date(personalData.bornDate).toLocaleString().slice(0,10),
        client_sex: personalData.sex,
        client_email: personalData.email,
        client_phone_area: personalData.areaCode,
        client_phone_number: personalData.phone,
        cnpj_main: cnpjData.mainCnpjType ? cnpjData.mainCnpjType : "Não não necessário para este serviço",
        cnpj_secondary: cnpjData.secundaryCnpjType ? cnpjData.secundaryCnpjType : "Não Informado",
        cnpj_name: cnpjData.fantasyName ? cnpjData.fantasyName : "Não necessário para este serviço",
        cnpj_acting: cnpjData.cnpjType ?  takeTrueValuesFromObject(cnpjData.cnpjType).toString() : "Não necessário para este serviço",
        client_cep: adressData.cep,
        client_adress: adressData.address,
        client_number: adressData.number,
        client_complement: adressData.complement ? adressData.complement : "Não Informado",
        client_neighborhood: adressData.neighborhood,
        client_state: adressData.state,
        client_city: adressData.city,
        client_accept_terms: adressData.acceptTerms ? "Sim" : "Não",
        client_accept_das: adressData.validCnpj ? "Sim" : "Não",
        operation_type: "Operação Realizada via Link de Pagamento",
        billing_data: billingData.title,
        billing_value: billingData.value,
        billing_date: new Date().toLocaleString("pt-BR").slice(0,10),
        invoicing_venda_prod: invoicingData.faturamentoVendaBruta ? invoicingData.faturamentoVendaBruta : "Não necessário ou não informado",
        invoicing_prestacao_servico: invoicingData.faturamentoPrestacaoServico ? invoicingData.faturamentoPrestacaoServico : "Não necessário ou não informado",
        invoicing_transporte_passageiro: invoicingData.faturamentoTransportePassageiros ? invoicingData.faturamentoTransportePassageiros : "Não necessário ou não informado",
        invoicing__transporte_cargas: invoicingData.faturamentoTransporteCarga ? invoicingData.faturamentoTransporteCarga : "Não necessário ou não informado",
        invoicing_despesas_anuais: invoicingData.faturamentoOutros ? invoicingData.faturamentoOutros : "Não necessário ou não informado",
        invoicing_ajuda: invoicingData.precisoDeAjuda ? "Sim, preciso de ajuda !" : "Não necessário ou não informado",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmailWithLink;
