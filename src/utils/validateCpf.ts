function validateCPF(cpf: string): boolean {
  // Remover caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Verificar se o CPF possui 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Calcular o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  const digitoVerificador1 = resto === 10 ? 0 : resto;

  // Verificar o primeiro dígito verificador
  if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
    return false;
  }

  // Calcular o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  const digitoVerificador2 = resto === 10 ? 0 : resto;

  // Verificar o segundo dígito verificador
  if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
    return false;
  }

  // CPF válido
  return true;
}

export default validateCPF;
