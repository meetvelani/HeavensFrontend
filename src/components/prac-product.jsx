import React from "react";
import { useState, useEffect } from "react";
import { getBestProducts, getNewProducts } from "../apiCalls";
import { getMainProducts } from "../apiCalls";
import { Container, Row, Col, Card } from "react-bootstrap";

function PracPro() {
  const [newProducts, setNewProducts] = useState([]);
  const [mainPrdt, setMainPrdt] = useState([]);
  const [bestPrdt, setBestPrdt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bestdata, maindata, data] = await Promise.all([
          getBestProducts(),
          getMainProducts(),
          getNewProducts()
        ]);
        
        const bestPrdt = JSON.parse(bestdata.Value);
        const mainPrdt = JSON.parse(maindata.Value);
        const newProducts = JSON.parse(data.Value);
        console.log(mainPrdt);
        
        setBestPrdt(bestPrdt);
        setMainPrdt(mainPrdt);
        setNewProducts(newProducts);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <Container className="my-5">
  <Row>
    {newProducts.map((product) => (
      <Col key={product.pk} md={3} className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src={`http://localhost:8000/uploads/${product.image_1}`}
            alt={product.title}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <strong>Category:</strong> {product.category}
              <br />
              <strong>Status:</strong> {product.status}
              <br />
              <strong>Description:</strong> {product.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <Row>
    {mainPrdt && mainPrdt.map((mainprdt) => (
      <Col key={mainprdt.pk} md={3} className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src={`http://localhost:8000/uploads/${mainprdt.fields.image_1}`}
            alt={mainprdt.title}
          />
          <Card.Body>
            <Card.Title>{mainprdt.title}</Card.Title>
            <Card.Text>
              <strong>Category:</strong> {mainprdt.category}
              <br />
              <strong>Status:</strong> {mainprdt.status}
              <br />
              <strong>Description:</strong> {mainprdt.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <Row>
    {bestPrdt && bestPrdt.map((bestprdt) => (
      <Col key={bestprdt.pk} md={3} className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src={`http://localhost:8000/uploads/${bestprdt.fields.image_1}`}
            alt={bestprdt.title}
          />
          <Card.Body>
            <Card.Title>{bestprdt.title}</Card.Title>
            <Card.Text>
              <strong>Category:</strong> {bestprdt.category}
              <br />
              <strong>Status:</strong> {bestprdt.status}
              <br />
              <strong>Description:</strong> {bestprdt.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

  );
}

export default PracPro;

