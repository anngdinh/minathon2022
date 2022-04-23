import React ,{ useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from 'styled-components'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import Header from '../Header.js'
import Footer from '../Footer.js'
function Home (){
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
    const [show,setShow]=useState(true);
    function More_info(){
        setShow(!show);
    }

    function RenderProduct (){
        return(
            <div class="card" style={{maxWidth: '400px'}}>
                <img class="card-img-top img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Card" style={{maxHeight:"300px"}}/>
                <div class="card-body">
                    <h4 class="card-title">Giày Nike</h4>
                    {!show ? 
                    <div >
                        <p class="card-text text-truncate" style={{maxWidth: "400px"}}>Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <p class="card-text" > Address: HCMUT </p>
                        <div class="d-flex justify-content-between"><p class="card-text" > In_stock: 1 </p>
                        <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </div>
                    </div>
                    :

                    <div>
                        <p class="card-text" >Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <p class="card-text" > Address: HCMUT </p>
                        <p class="card-text" > Phone: 0123456789 </p>
                        <div class="d-flex justify-content-between">
                            <p class="card-text" > In_stock: 1 </p>
                            <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </div>
                    </div>
                    }
                    <p class="text-center"><a href="#" class="btn btn-primary ">Cho em xin</a></p>
                </div>
            </div>
        )
    }

    return(
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
                <NavItem className={targetNavItem==='product'?'active':''} onClick={() => changeNavItem('product')}>Product</NavItem>
                    <NavChildItem className={targetNavChildItem==='product1'?'active':''} onClick={() => changeNavItem('product1')}>Product1</NavChildItem>
                    <NavChildItem className={targetNavChildItem==='product2'?'active':''} onClick={() => changeNavItem('product2')}>Product2</NavChildItem>
                    <NavChildItem className={targetNavChildItem==='product3'?'active':''} onClick={() => changeNavItem('product3')}>Product3</NavChildItem>
                    <NavChildItem className={targetNavChildItem==='product4'?'active':''} onClick={() => changeNavItem('product4')}>Product4</NavChildItem>
                <Hr/>
            </NavBox>

            <RenderProduct/>
            <RenderProduct/>
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
export default Home