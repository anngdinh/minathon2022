import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from 'styled-components'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import Header from '../Header.js'
import Footer from '../Footer.js'
import { Card, Col, Button, Modal } from 'react-bootstrap';
import axios from "axios";
function Home() {
    const [targetNavItem, setTargetNavItem] = useState('donation')
    const [targetNavChildItem, setTargetNavChildItem] = useState('')
    const changeNavItem = (item) => {
        switch (item) {
            case 'my-account':
            case 'donation':
            case 'product':
            case 'received':
                setTargetNavChildItem('')
                setTargetNavItem(item)
                break;
            case 'my-event':
            case 'participated':
                setTargetNavItem('event')
                setTargetNavChildItem(item)
                break;
            default:
                break;
        }
    }
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/product")
    //         .then((res) => {
    //             // categories = res.data;
    //             console.log("res data : ", res.data);
    //             setProducts(res.data);
    //             // console.log(products);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);
    const products = [
        {
            "_id": "6263fce2a35a4f231a39503c",
            "categoryId": "6263ab9deb735b01400c03cc",
            "img": [
                "http://localhost:5000/public\\2022-04-23T13-19-30.651ZIMG_20220311_171916_495.png"
            ],
            "description": "san pham pro",
            "title": "test title",
            "userId": "6263a3b447b5920d614a6f7f",
            "amount": 12000,
            "__v": 0
        },
        {
            "_id": "62641a1d415e893814701555",
            "categoryId": "6263aba5eb735b01400c03ce",
            "img": [
                "http://localhost:5000/public\\2022-04-23T15-24-13.930ZMongoDB.PNG"
            ],
            "description": "test",
            "title": "test2",
            "userId": "6263a3b447b5920d614a6f7f",
            "amount": 18000,
            "__v": 0
        }
    ]


    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({});

    const handleClose = () => {
        // setShow(false)
        setShow(false)
    };
    const handleShow = (e) => {
        // setModal(product);
        // setShow(true);
        console.log(e)
    };


    return (
        <>
            <Header />
            <Container>
                <Head>
                    <Breadcrumbs separator="›" maxItems={2} aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Typography color="text.primary">My Account</Typography>
                    </Breadcrumbs>
                    <h2 style={{ marginTop: '10px' }}>My Account</h2>
                </Head>
                <Row>
                    <NavBox>
                        <NavItem className={targetNavItem === 'my-account' ? 'active' : ''} onClick={() => changeNavItem('my-account')}>My Account</NavItem>
                        <NavItem className={targetNavItem === 'donation' ? 'active' : ''} onClick={() => changeNavItem('donation')}>Donation</NavItem>
                        <NavItem className={targetNavItem === 'received' ? 'active' : ''} onClick={() => changeNavItem('received')}>Received</NavItem>
                        <NavItem className={targetNavItem === 'event' ? 'active' : ''} onClick={() => changeNavItem('my-event')}>Event</NavItem>
                        <NavChildItem className={targetNavChildItem === 'my-event' ? 'active' : ''} onClick={() => changeNavItem('my-event')}>My Event</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'participated' ? 'active' : ''} onClick={() => changeNavItem('participated')}>Participated</NavChildItem>
                        <NavItem className={targetNavItem === 'product' ? 'active' : ''} onClick={() => changeNavItem('product')}>Product</NavItem>
                        <NavChildItem className={targetNavChildItem === 'product1' ? 'active' : ''} onClick={() => changeNavItem('product1')}>Product1</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'product2' ? 'active' : ''} onClick={() => changeNavItem('product2')}>Product2</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'product3' ? 'active' : ''} onClick={() => changeNavItem('product3')}>Product3</NavChildItem>
                        <NavChildItem className={targetNavChildItem === 'product4' ? 'active' : ''} onClick={() => changeNavItem('product4')}>Product4</NavChildItem>
                        <Hr />
                    </NavBox>

                    {products.map(product => (
                        <div></div>
                    ))}

                    <Container>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://grist.org/wp-content/uploads/2013/10/sneakers-crop.jpg" />
                                    <Card.Body>
                                        <div className='d-flex flex-row align-items-center justify-content-between'>
                                            <Card.Title>An old Shoes</Card.Title>
                                            <div>12/2/2001</div>
                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-between'>
                                            <Card.Text>
                                                Nguyễn Đình An
                                            </Card.Text>
                                            <Button variant="primary" data-toggle="modal" data-target=".bd-example-modal-lg">More detail</Button>

                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>2 of 2</Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <Footer />

            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}


            {products.map(product => (
                <Button variant="primary" onClick={() => { setModal(product); setShow(true) }} name={product._id}>
                    {product.title}
                </Button>
            ))}



            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Img variant="top" src={modal.img[0]} />
                        <Card.Body>
                            <div className='d-flex flex-row align-items-center justify-content-between'>
                                <Card.Title>An old Shoes</Card.Title>
                                <div>12/2/2001</div>
                            </div>

                            <Card.Text>
                                Nguyễn Đình An
                            </Card.Text>

                            <Card.Text>
                                {modal.description}
                                {modal.amount}
                                {modal.userId}
                                {modal.categoryId}
                            </Card.Text>



                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Get it
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
const Content = styled.div`
  width: 75%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  min-height: 400px;
`
const Hr = styled.hr`
  margin-left: 15px;
  border: 0;
  height: 0.2px;
  background-image: -webkit-linear-gradient(#d6d6d6, #d6d6d6, #d6d6d6);
`
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const NavChildItem = styled.div`
  padding: 10px 0;
  margin-left: 30px;
  cursor: pointer;
  &.active {
    color: #0156FF;
  }
`
const NavItem = styled.div`
  padding: 10px 0;
  padding-left: 15px;
  cursor: pointer;
  &.active {
    border-left: 3px solid #0156FF;
  }
`
const NavBox = styled.div`
  color: gray;
  background-color: #F5F7FF;
  width: 20%;
  padding: 5px 15px 5px 0;
  height: fit-content;
`
const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`
export default Home