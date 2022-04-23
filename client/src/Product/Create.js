import styled from 'styled-components'
import { Container, Row, Col } from "react-grid-system";
import { useState } from 'react';

const User = {
    "username": "Long",
    "password": "123456",
    "fname": "Nguyen",
    "lname": "Long",
    "email": "Nothing@gmail.com",
    "phone": "0984046827",
    "url_avt": "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang-dep-1.jpg",
    "birthday": "2001-01-01",
}

export default function Create() {
    const choices = [
        {
            id: 1,
            name: "Male"
        },
        {
            id: 2,
            name: "Female"
        },
        {
            id: 3,
            name: "Other"
        }
    ]

    const [checked, setChecked] = useState(1);

    return (
        <div>
            <Container>
                <form encType='multipart/form-data' method="POST">
                    <ContainerInput>
                        <Row>
                            <Col lg={2.5}><NameInput>CategoryId</NameInput></Col>
                            <Col lg={9.5}><Input type="text" /></Col>
                        </Row>
                    </ContainerInput>
                    <ContainerInput>
                        <Row>
                            <Col lg={2.5}><NameInput>Img</NameInput></Col>
                            <Col lg={9.5}><Input type="file" /></Col>
                        </Row>
                    </ContainerInput>
                    <ContainerInput>
                        <Row>
                            <Col lg={2.5}><NameInput>Description</NameInput></Col>
                            <Col lg={9.5}><Input type="text" /></Col>
                        </Row>
                    </ContainerInput>
                    <ContainerInput>
                        <Row>
                            <Col lg={2.5}><NameInput>User id</NameInput></Col>
                            <Col lg={9.5}><Input type="text" /></Col>
                        </Row>
                    </ContainerInput>
                    <ContainerInput>
                        <Row>
                            <Col lg={2.5}><NameInput>Amount</NameInput></Col>
                            <Col lg={9.5}><Input type="number" /></Col>
                        </Row>
                    </ContainerInput>
                    <ContainerInput>
                        <Row>
                            <Col lg={2.5}><NameInput>Title</NameInput></Col>
                            <Col lg={9.5}><Input type="text" /></Col>
                        </Row>
                    </ContainerInput>

                    <ButtonSave>Save</ButtonSave>
                </form>
            </Container>


        </div>
    )
}


const Line = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background-color:#CACDD8;
    border-radius: 10%;
`
const ImgProduct = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
    border-radius: 50%;
`
const ContainerImg = styled.div`
    border: solid 1px;
    height: 15vw;
    width: 15vw;
    border-radius: 50%;
    border: none;
`

const ContainerInput = styled.div`
    /* background-color: #F5F7FF; */
    margin-bottom: 5px;
    border-top-right-radius: 15px;
    padding-top: 5px;
`
const NameInput = styled.span`
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 90%;
    height: 30px;
    line-height: 30px;
    
    /* background-color: red; */
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: solid #CCCCCC 1px;
    padding-left: 2%;
`
const ColStyled = styled(Col)`
    /* background-color: red; */
`
const SpanChoice = styled.span`
    margin-right: 10px;
    font-size: 90%;
`
const InputChoice = styled.input`
    margin: 5px;
    font-size: 90%;
`
const ButtonSave = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 10px;
    border: none;
    float: right;
    margin-top: 20px;
    background-color: #0156FF;
    font-weight: 600;
    color: white;
    transition: all .3s;
    :hover {
        background-color: #00369F;
    }
    cursor: pointer;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 104%;
`
const IconEdit = styled.div`
    background-color: 	#CCCCCC;
    border-radius: 50%;
    padding: 6px 6px;
    transition: all 0.5s;
    :hover {
        background-color: #A98F8F;
    }
    border: none;
`
const ButtonEdit = styled.div`
    position: absolute;
    z-index: 2;
    cursor: pointer;
    border-radius: 50%;
    border: none;
`
const ContainerEdit = styled.div`
    display: flex;
    align-items: flex-end;
`