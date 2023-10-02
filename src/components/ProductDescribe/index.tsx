import { ProductTable } from "./styles";

type ProductInfo = {
  description: string;
  amount: number;
};

const ProductDescribe = ({ description, amount }: ProductInfo) => {

  const formatAmount = (amount: number) => {
    const ammountToPattern = amount / 100;
    return ammountToPattern.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <ProductTable>
      <thead>
        <tr>
          <td className="text-bold">Produto</td>
          <td className="text-bold">Valor</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{description}</td>
          <td>{ formatAmount(amount) }</td>
        </tr>
        <tr>
          <td className="text-bold">Total</td>
          <td className="text-bold">{ formatAmount(amount) }</td>
        </tr>
      </tbody>
    </ProductTable>
  );
};

export default ProductDescribe;
