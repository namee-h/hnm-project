import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const ProductAll = ({authenticate}) => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery]=useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?",searchQuery)
    let url = `https://my-json-server.typicode.com/nanee-h/hnm-project/products?/q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("데이터는는?",data)
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  const navigate = useNavigate();
  const goToDetail =(id)=>{
    if(authenticate===false){
        navigate('/login')
    }else if(authenticate===true){
        navigate(`/product/${id}`)
    }
   console.log("클릭?",id)
  }
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <span onClick={()=>goToDetail(item.id)}><ProductCard   item={item} /></span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
