import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const User = {
  username: "Long",
  password: "123456",
  fname: "Nguyen",
  lname: "Long",
  email: "Nothing@gmail.com",
  phone: "0984046827",
  url_avt:
    "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang-dep-1.jpg",
  birthday: "2001-01-01",
};

export default function Create() {
  const [newProduct, setNewproduct] = useState({
    title: "",
    amount: "",
    image: "",
    description: "",
    address: "",
    category: "",
  });
  const { title, amount, image, description, address, category } = newProduct;
  const onChangeField = (e) => {
    setNewproduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangImg = (e) => {
    setNewproduct({
      ...newProduct,
      image: e.target.files[0],
    });
  };
  // let categories;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        // categories = res.data;
        console.log(res.data);
        setCategories(res.data);
        console.log(categories);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    const formData = new FormData();
    formData.append("categoryId", newProduct.category);
    formData.append("description", newProduct.description);
    formData.append("title", newProduct.title);
    formData.append("userId", "6263a3b447b5920d614a6f7f");
    formData.append("amount", newProduct.amount);
    formData.append("img", newProduct.image);
    axios.post("http://localhost:5000/product", formData);
  };
  return (
    <div>
      <Title>Create Donation</Title>
      <Container style={{ maxWidth: "900px" }}>
        <form encType="multipart/form-data" method="POST">
          <ContainerInput>
            <Row>
              <Col lg={2.5}>
                <NameInput>Title</NameInput>
              </Col>
              <Col lg={9.5}>
                <Input
                  type="text"
                  onChange={onChangeField}
                  name="title"
                  value={title}
                />
              </Col>
            </Row>
          </ContainerInput>
          <ContainerInput>
            <Row>
              <Col lg={2.5}>
                <NameInput>Category</NameInput>
              </Col>
              <Col lg={9.5}>
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChangeField}
                  name="category"
                  value={category}
                >
                  {/* <option>Open this select menu</option> */}
                  <option key="xx" selected hidden>
                    Choose one
                  </option>
                  {categories.map((cate, index) => (
                    <option key={cate._id} value={cate._id}>
                      {cate.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </ContainerInput>
          <ContainerInput>
            <Row>
              <Col lg={2.5}>
                <NameInput>Image</NameInput>
              </Col>
              <Col lg={9.5}>
                <input
                  type="file"
                  onChange={handleChangImg}
                  name="image"
                  // value={image}
                />
              </Col>
            </Row>
          </ContainerInput>
          <ContainerInput>
            <Row>
              <Col lg={2.5}>
                <NameInput>Description</NameInput>
              </Col>
              <Col lg={9.5}>
                <Input
                  type="text"
                  onChange={onChangeField}
                  name="description"
                  value={description}
                />
              </Col>
            </Row>
          </ContainerInput>
          <ContainerInput>
            <Row>
              <Col lg={2.5}>
                <NameInput>Amount</NameInput>
              </Col>
              <Col lg={9.5}>
                <Input
                  type="number"
                  onChange={onChangeField}
                  name="amount"
                  value={amount}
                />
              </Col>
            </Row>
          </ContainerInput>

          <ButtonSave onClick={handleClick}>Create</ButtonSave>
        </form>
      </Container>

      {/* <ButtonSave>Create</ButtonSave> */}
    </div>
  );
}

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  border-left: 5px solid blue;
  margin: 30px 0 30px 17vw;
  padding-left: 3vw;
`;
const Line = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 1px;
  background-color: #cacdd8;
  border-radius: 10%;
`;
const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fit;
  border-radius: 50%;
`;
const ContainerImg = styled.div`
  border: solid 1px;
  height: 15vw;
  width: 15vw;
  border-radius: 50%;
  border: none;
`;

const ContainerInput = styled.div`
  /* background-color: #F5F7FF; */
  margin-bottom: 10px;
  border-top-right-radius: 15px;
  padding-top: 5px;
`;
const NameInput = styled.span`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 20px;
  height: 30px;
  line-height: 30px;

  /* background-color: red; */
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: solid #cccccc 1px;
  padding-left: 2%;
`;
const ColStyled = styled(Col)`
  /* background-color: red; */
`;
const SpanChoice = styled.span`
  margin-right: 10px;
  font-size: 90%;
`;
const InputChoice = styled.input`
  margin: 5px;
  font-size: 90%;
`;
const ButtonSave = styled(Button)`
  float: right;
`;

const IconEdit = styled.div`
  background-color: #cccccc;
  border-radius: 50%;
  padding: 6px 6px;
  transition: all 0.5s;
  :hover {
    background-color: #a98f8f;
  }
  border: none;
`;
const ButtonEdit = styled.div`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  border-radius: 50%;
  border: none;
`;
const ContainerEdit = styled.div`
  display: flex;
  align-items: flex-end;
`;
