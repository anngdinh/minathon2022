import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import styled from "styled-components";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import Header from "../Header.js";
import Footer from "../Footer.js";
import { Card, Col, Button, Modal, Row, Badge } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const [targetNavItem, setTargetNavItem] = useState("donate");
  const [targetNavChildItem, setTargetNavChildItem] = useState("");
  const changeNavItem = (item) => {
    switch (item) {
      case "donate":
      case "archived":
      case "received":
        setTargetNavChildItem("");
        setTargetNavItem(item);
        break;
      case "my-event":
      case "participated":
        setTargetNavItem("event");
        setTargetNavChildItem(item);
        break;
      default:
        break;
    }
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => {
        console.log("products: ", res.data);
        setProducts(res.data);
      })
      .catch((error) => console.log(error));

    // getName();
  }, [loading]);
  // const products = [
  //     {
  //         "_id": "6263fce2a35a4f231a39503c",
  //         "categoryId": "6263ab9deb735b01400c03cc",
  //         "img": [
  //             "http://localhost:5000/public\\2022-04-23T13-19-30.651ZIMG_20220311_171916_495.png"
  //         ],
  //         "description": "san pham pro",
  //         "title": "test title",
  //         "userId": "6263a3b447b5920d614a6f7f",
  //         "amount": 12000,
  //         "__v": 0
  //     },
  //     {
  //         "_id": "62641a1d415e893814701555",
  //         "categoryId": "6263aba5eb735b01400c03ce",
  //         "img": [
  //             "http://localhost:5000/public\\2022-04-23T15-24-13.930ZMongoDB.PNG"
  //         ],
  //         "description": "test",
  //         "title": "test2",
  //         "userId": "6263a3b447b5920d614a6f7f",
  //         "amount": 18000,
  //         "__v": 0
  //     }
  // ]

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState({});

  const handleClose = () => {
    // setShow(false)
    setShow(false);
  };

  const handleTransaction = (p_id, donate_id, amount) => {
    const my_id = localStorage.getItem("userId");
    const form2 = new FormData();
    form2.append("amount", amount - 1);
    // form2.append("amount", amount - 1);
    axios
      .put("http://localhost:5000/product?id=" + p_id, form2)
      .then((res) => {
        console.log("change amount", res.data);
      })
      .catch((error) => console.log(error));

    const form = new FormData();
    // console.log("an", p_id, my_id);
    form.append("productId", p_id);
    form.append("userIdReceive", my_id);
    console.log("form", form);
    axios
      .post("http://localhost:5000/transition", form)
      .then((res) => {
        console.log("x", res.data);

        Swal.fire("Successfully!", "Your request is pendding!", "success");
        handleClose();
      })
      .catch((error) => console.log(error));

    axios
      .put("http://localhost:5000/user/point?id=" + donate_id, form)
      .then((res) => {
        console.log("point increase: ", res.data);
      })
      .catch((error) => console.log(error));

    setLoading((pre) => !pre);
  };
  const handleShow = (e) => {
    // setModal(product);
    // setShow(true);
    console.log(e);
  };

  return (
    <>
      <Header />
      {/* <SubNav>
                <SubNavItem onClick={() => navigate("/home", { replace: true })}>Getting support</SubNavItem>
                <SubNavItem>How you can help</SubNavItem>
                <SubNavItem onClick={() => navigate("/create", { replace: true })}>Donate</SubNavItem>
                <SubNavItem onClick={() => navigate("/event", { replace: true })}>Events</SubNavItem>
                <SubNavItem>About us</SubNavItem>
            </SubNav> */}

      <Container>
        <Head>
          <Breadcrumbs separator="›" maxItems={2} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Home</Typography>
          </Breadcrumbs>
          <h2 style={{ marginTop: "10px" }}>Home</h2>
        </Head>
        <div className="d-flex flex-row ">
          <NavBox>
            <NavItem
              className={targetNavItem === "donate" ? "active" : ""}
              onClick={() => changeNavItem("donate")}
            >
              Donate
            </NavItem>
            <NavItem
              className={targetNavItem === "archived" ? "active" : ""}
              onClick={() => changeNavItem("archived")}
            >
              Archived
            </NavItem>
            <NavItem
              className={targetNavItem === "received" ? "active" : ""}
              onClick={() => changeNavItem("received")}
            >
              Received
            </NavItem>
            <NavItem
              className={targetNavItem === "event" ? "active" : ""}
              onClick={() => changeNavItem("my-event")}
            >
              Event
            </NavItem>
            <NavChildItem
              className={targetNavChildItem === "my-event" ? "active" : ""}
              onClick={() => changeNavItem("my-event")}
            >
              My Event
            </NavChildItem>
            <NavChildItem
              className={targetNavChildItem === "participated" ? "active" : ""}
              onClick={() => changeNavItem("participated")}
            >
              Participated
            </NavChildItem>
            {/* <NavItem className={targetNavItem === 'product' ? 'active' : ''} onClick={() => changeNavItem('product')}>Product</NavItem>
                        <NavChildItem className={targetNavChildItem === 'product1' ? 'active' : ''} onClick={() => changeNavItem('product1')}>Product1</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'product2' ? 'active' : ''} onClick={() => changeNavItem('product2')}>Product2</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'product3' ? 'active' : ''} onClick={() => changeNavItem('product3')}>Product3</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'product4' ? 'active' : ''} onClick={() => changeNavItem('product4')}>Product4</NavChildItem>
                        <Hr /> */}
          </NavBox>

          {/* {products.map(product => (
                        <div></div>
                    ))} */}

          <Container>
            <Row xs={1} md={2} className="g-4">
              {products.map((product) =>
                product.amount <= 0 ||
                product.userId._id === localStorage.getItem("userId") ? (
                  <></>
                ) : (
                  <Col key={product._id}>
                    <Card>
                      <Card.Img variant="top" src={product.img} />
                      <Card.Body>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <Card.Title>{product.title}</Card.Title>
                          <div>12/2/2001</div>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <Card.Text>
                            Donator: {product.userId ? product.userId.name : ""}
                          </Card.Text>
                          {/* <Card.Text>
                                                    Amount: {product.amount}
                                                </Card.Text> */}

                          {/* <Button variant="primary" data-toggle="modal" data-target=".bd-example-modal-lg">More detail</Button> */}
                          <Button
                            variant="primary"
                            onClick={() => {
                              setModal(product);
                              setShow(true);
                            }}
                            name={product._id}
                          >
                            {/* {product.title} */}
                            More details
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Container>
        </div>
      </Container>
      <Footer />

      {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

      {/* {products.map(product => (
                <Button variant="primary" onClick={() => { setModal(product); setShow(true) }} name={product._id}>
                    {product.title}
                </Button>
            ))} */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={modal.img} />
            <Card.Body>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <Card.Title>{modal.title}</Card.Title>
                <div>12/2/2001</div>
              </div>

              <Badge bg="secondary">
                {modal.categoryId ? modal.categoryId.name : ""}
              </Badge>

              <Card.Text>
                Donator: {modal.userId ? modal.userId.name : ""}
              </Card.Text>
              <Card.Text>Amount: {modal.amount}</Card.Text>
              <Card.Text>Description: {modal.description}</Card.Text>
              {/* {modal.amount} */}
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              handleTransaction(modal._id, modal.userId._id, modal.amount)
            }
          >
            Get it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const Content = styled.div`
  width: 75%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;
const Hr = styled.hr`
  margin-left: 15px;
  border: 0;
  height: 0.2px;
  background-image: -webkit-linear-gradient(#d6d6d6, #d6d6d6, #d6d6d6);
`;
// const Row = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
// `
const NavChildItem = styled.div`
  padding: 10px 0;
  margin-left: 30px;
  cursor: pointer;
  &.active {
    color: #0156ff;
  }
`;
const NavItem = styled.div`
  padding: 10px 0;
  padding-left: 15px;
  cursor: pointer;
  &.active {
    border-left: 3px solid #0156ff;
  }
`;
const NavBox = styled.div`
  color: gray;
  background-color: #f5f7ff;
  width: 20%;
  padding: 5px 15px 5px 0;
  height: fit-content;
  margin-right: 20px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid gray;
`;
const SubNavItem = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  flex: auto 1 1;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  :hover {
    background-color: #7cd2ff;
  }

  color: #002c5c;
  font-weight: bold;
  font-size: 22px;
`;
export default Home;
