const validarCNPJ = (cnpj: string): boolean => {
  // Remove caracteres não numéricos do CNPJ
  cnpj = cnpj.replace(/[^\d]+/g,'');

  // Verifica se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  let peso = 2;
  for (let i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let digitoVerificador1 = soma % 11 < 2 ? 0 : 11 - soma % 11;

  // Calcula o segundo dígito verificador
  soma = 0;
  peso = 2;
  for (let i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let digitoVerificador2 = soma % 11 < 2 ? 0 : 11 - soma % 11;

  // Verifica se os dígitos verificadores calculados são iguais aos do CNPJ
  if (parseInt(cnpj.charAt(12)) !== digitoVerificador1 || parseInt(cnpj.charAt(13)) !== digitoVerificador2) {
    return false;
  }

  // Se todas as verificações passaram, o CNPJ é válido
  return true;
}

export default validarCNPJ;
