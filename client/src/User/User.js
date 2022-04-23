import React, { useState } from 'react'
// import Footer from '../Footer'
// import Header from '../Header'
import styled from 'styled-components'
import { Breadcrumbs, Link, Typography } from '@mui/material'
// import Orders from './Orders'
// import Wishlist from './Wishlist'

import Information from './Information'
import ProductList from './ProductList'
import Header from '../Header'
import Footer from '../Footer'
const Products = [
  {
      "img": "https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg",
      "address": "ktx khu A",
      "category": "Clothing",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "amount": 1,
      "title": "Hoang ĐBRR"
  }
]

const User = () => {
  
  const [targetNavItem, setTargetNavItem] = useState('donation')
  const [targetNavChildItem, setTargetNavChildItem] = useState('')
  const changeNavItem = (item) => {
    switch (item) {
      case 'my-account':
      case 'donation':
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

  return (
    <>
    <Header/>
    <Container>
      <Head>
        <Breadcrumbs separator="›" maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">My Account</Typography>
        </Breadcrumbs>
        <h2 style={{marginTop: '10px'}}>My Account</h2>
      </Head>
      <Row>
        <NavBox>
          <NavItem className={targetNavItem==='my-account'?'active':''} onClick={() => changeNavItem('my-account')}>My Account</NavItem>
          <NavItem className={targetNavItem==='donation'?'active':''} onClick={() => changeNavItem('donation')}>Donation</NavItem>
          <NavItem className={targetNavItem==='received'?'active':''} onClick={() => changeNavItem('received')}>Received</NavItem>
          <NavItem className={targetNavItem==='event'?'active':''} onClick={() => changeNavItem('my-event')}>Event</NavItem>
          <NavChildItem className={targetNavChildItem==='my-event'?'active':''} onClick={() => changeNavItem('my-event')}>My Event</NavChildItem>
          <NavChildItem className={targetNavChildItem==='participated'?'active':''} onClick={() => changeNavItem('participated')}>Participated</NavChildItem>
          <Hr/>
        </NavBox>
        <Content>
          
          {targetNavItem==='my-account' && <Information/>}
          {targetNavItem==='donation' && <ProductList list={Products} type={1} />}
          {targetNavItem==='received' && <ProductList list={Products} type={1} />}
        </Content>
      </Row>
    </Container>
    <Footer/>
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

export default User