const removeNonNumericCharacters = (str: string) => {
  return str.replace(/\D/g, '');
}

const removeWhiteSpace = (str: string) => {
  return str.replace(/\s/g, '');
}

const generateRandomNumber = (): string => {
  const length = Math.floor(Math.random() * 12) + 5; // Gera um número aleatório entre 5 e 16
  let result = '';
  const characters = '0123456789'; // Caracteres disponíveis para o número aleatório

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

export { removeNonNumericCharacters, removeWhiteSpace, generateRandomNumber };
