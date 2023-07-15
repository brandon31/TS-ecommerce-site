import { Card } from "react-bootstrap";
import { formatCurrency } from "../utility/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={imgUrl}
          // height="250px"
          style={{ aspectRatio: "1 / 1", display: "block", width: "100%" }}
        ></Card.Img>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span>{name}</span>
            <span className="text-muted">{formatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
