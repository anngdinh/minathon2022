import React, { useState, useEffect } from "react";
// import Footer from '../Footer'
// import Header from '../Header'
import styled from "styled-components";
import { Breadcrumbs, Link, Typography } from "@mui/material";
// import Orders from './Orders'
// import Wishlist from './Wishlist'

import Information from "./Information";
import ProductList from "./ProductList";
import Header from "../Header";
import Footer from "../Footer";
import RenderFruit from "../Events/RenderFruit";
import axios from "axios";
const listSample = [
  {
    _id: "6264c085fc7a883e9d74bfa0",
    productId: {
      _id: "6263fce2a35a4f231a39503c",
      categoryId: "6263ab9deb735b01400c03cc",
      img: [
        "http://localhost:5000/public\\2022-04-23T13-19-30.651ZIMG_20220311_171916_495.png",
      ],
      description: "--",
      title: "--",
      userId: {
        _id: "6263a3b447b5920d614a6f7f",
        name: "--",
        phone: "0123456789",
        point: 3,
        __v: 0,
      },
      amount: 3,
      __v: 0,
    },
    userIdReceive: {
      _id: "6263a4a0a980a36bced49cae",
      name: "--",
      phone: "03584848",
      point: 0,
      __v: 0,
    },
  },
];

const User = () => {

  const [targetNavItem, setTargetNavItem] = useState('my-account')
  const [targetNavChildItem, setTargetNavChildItem] = useState('')
  const changeNavItem = (item) => {
    switch (item) {
      case "my-account":
      case "donation":
      case "received":
      case "tree":
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
  const my_id = localStorage.getItem("userId");
  const [receive, setReceive] = useState(listSample);
  const [donate, setDonate] = useState(listSample);
  const [num_donate, setNum_donate] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/transition?id=" + my_id)
      .then((res) => {
        console.log("receive: ", res.data);
        setReceive(res.data);
      })
      .catch((error) => console.log(error));

    var d;
    axios
      .get("http://localhost:5000/product")
      .then((res) => {
        console.log("donate: ", res.data);
        d = res.data;
        const ds = d.filter((item) => {
          return item.userId._id === my_id;
        });
        console.log("ds: ", ds);
        setNum_donate(ds.length);
        // console.log("numDonate: ", numDonate)
        setDonate(ds);
      })
      .catch((error) => console.log(error));

    // getName();
  }, []);

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
          <h2 style={{ marginTop: "10px" }}>My Account</h2>
        </Head>
        <Row>
          <NavBox>
            <NavItem
              className={targetNavItem === "my-account" ? "active" : ""}
              onClick={() => changeNavItem("my-account")}
            >
              My Account
            </NavItem>
            <NavItem
              className={targetNavItem === "donation" ? "active" : ""}
              onClick={() => changeNavItem("donation")}
            >
              Donation
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
            <NavItem
              className={targetNavItem === "tree" ? "active" : ""}
              onClick={() => changeNavItem("tree")}
            >
              Charity Tree
            </NavItem>
            <Hr />
          </NavBox>
          <Content>
            {targetNavItem === "my-account" && <Information />}
            {targetNavItem === "donation" && (
              <ProductList list={donate} type={1} />
            )}
            {targetNavItem === "received" && (
              <ProductList list={receive} type={2} />
            )}
            {targetNavItem === "tree" && <RenderFruit number={num_donate} />}
          </Content>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

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
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
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

export default User;
