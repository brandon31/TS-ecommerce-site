import { Row, Col } from "react-bootstrap";
import storeItems from "../data/shopItems.json";
import { StoreItem } from "../components/StoreItem";
import "../App.css";

export function Shop() {
  return (
    <>
      <h1 className="m-3">Shop our Exquisite Collection Today!</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((productItem) => (
          <Col key={productItem.id}>
            <StoreItem {...productItem} />
          </Col>
        ))}
      </Row>
    </>
  );
}
