import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/nanee-h/hnm-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <p>{product?.title}</p>
          <p>₩{product?.price}</p>
          <p>{product?.choice === true ? "Conscious choice" : " "}</p>
          <p>{product?.new === true ? "신제품" : " "}</p>
          <p className="add-buttons">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  {product?.size[0]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {product?.size[1]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {product?.size[2]}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="danger" type="submit">
              추가
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
