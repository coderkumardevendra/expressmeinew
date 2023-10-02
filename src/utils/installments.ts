const generateInstallments = (value: number) => {
  const installments = [];
  // padrão pagarme 14999 para 149.99
  const valueFormatted = value / 100;

  for (let i = 1; i <= 10; i++) {
    const installmentValue = (valueFormatted / i).toFixed(2);
    const label = `${i}x de R$ ${installmentValue}`;

    installments.push({ key: i, label });
  }

  return installments;
}

export default generateInstallments;
