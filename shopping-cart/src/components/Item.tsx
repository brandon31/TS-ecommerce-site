import { formatCurrency } from "../utility/formatCurrency";

type ProductProps = {
  name: string;
  price: number;
};

function Item({ name, price }: ProductProps) {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </div>
      </div>
    </>
  );
}

export default Item;
