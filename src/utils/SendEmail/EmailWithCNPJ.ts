import axios from "axios";

function getDataAtual(): string {
  const agora = new Date();
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
  const ano = agora.getFullYear();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  const segundo = agora.getSeconds().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const sendPaymentConfirmEmail = async (
  personalData: any,
  productInfo: any,
  method: string
) => {
  try {
    axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_m2ay99e",
      template_id: "template_24begti",
      user_id: "cF2X-20hKfOUWyWnq",
      template_params: {
        client_cnpj: personalData.cnpj ? personalData.cnpj : "CNPJ não necessário para este serviço",
        client_name: personalData.name,
        client_lastname: personalData.lastname,
        client_mother: personalData.motherName,
        client_cpf: personalData.cpf,
        client_rg: personalData.rgNumber,
        client_uf: personalData.rgEmission,
        client_born_date: personalData.bornDate,
        client_sex: personalData.sex,
        client_email: personalData.email,
        client_phone_number: personalData.numberCelphone,
        cnpj_main: personalData.mainActivity ? personalData.mainActivity : "Não não necessário para este serviço",
        cnpj_secondary: personalData.secondActivity ? personalData.secondActivity : "Não Informado",
        cnpj_capital_inicial: personalData.inicialCapital ? `R$ ${personalData.inicialCapital}` : "Não Informado",
        cnpj_name: personalData.cnpjName ? personalData.cnpjName : "Não necessário para este serviço",
        cnpj_acting: personalData.cnpjOptions ?  personalData.cnpjOptions.toString() : "Não necessário para este serviço",
        client_cep: personalData.cep,
        client_adress: personalData.street,
        client_number: personalData.number,
        client_complement: personalData.complement ? personalData.complement : "Não Informado",
        client_neighborhood: personalData.neighborhood,
        client_state: personalData.state,
        client_city: personalData.city,
        client_accept_terms: personalData.terms ? "Sim" : "Não",
        client_accept_das: personalData.declaracaoDai ? "Sim" : "Não",
        operation_type: productInfo.name,
        billing_data: method,
        billing_value: productInfo.amount / 100,
        billing_date: getDataAtual(),
        invoicing_venda_prod: personalData.faturamentoVendaBruta ? personalData.faturamentoVendaBruta : "Não necessário ou não informado",
        invoicing_prestacao_servico: personalData.faturamentoPrestacaoServico ? personalData.faturamentoPrestacaoServico : "Não necessário ou não informado",
        invoicing_transporte_passageiro: personalData.faturamentoTransportePassageiros ? personalData.faturamentoTransportePassageiros : "Não necessário ou não informado",
        invoicing__transporte_cargas: personalData.faturamentoTransporteCarga ? personalData.faturamentoTransporteCarga : "Não necessário ou não informado",
        invoicing_despesas_anuais: personalData.faturamentoOutros ? personalData.faturamentoOutros : "Não necessário ou não informado",
        invoicing_ajuda: personalData.precisoDeAjuda ? "Sim, preciso de ajuda !" : "Não necessário ou não informado",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendPaymentConfirmEmail;
