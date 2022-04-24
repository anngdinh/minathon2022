import styled from 'styled-components'
import { Card, CardGroup, Figure, Badge } from 'react-bootstrap';

export default function ProductList({ list, type }) {
  // type 1 for donation, type 2 for received
  // console()
  return (
    <div>
      <Title>{type === 1 ? 'My Donation' : 'Received'}</Title>
      <Line />

      {list.map((item) => (
        <Card style={{ margin: "10px 5px" }}>
          <ProductItem>
            <Img
              alt="171x180"
              src={type === 1 ? item.img[0] : item.productId.img[0]}
            />

            <Content>
              <TitleProduct>
                <p className='title'>{type === 1 ? item.title : item.productId.title}</p>
                <div className='state'>

                  {/* <Status>
                  <i class="fa-check-circle"></i> in stock
                </Status> */}
                </div>

              </TitleProduct>

              <Badge bg="secondary">{type === 1 ? item.categoryId.name : item.productId.categoryId}</Badge>
              <Description>
                {type === 1 ? ("") : ("Donator: " + item.productId.userId.name)}
              </Description>
              <Description>
                {type === 1 ? item.description : item.productId.description}
              </Description>
            </Content>
          </ProductItem>
        </Card>
      ))}



      {/* {list[0].address}
      {type} */}
    </div>
  )
}

const Title = styled.div`
    font-weight: 600;
    font-size: 104%;
`
const Line = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background-color:#CACDD8;
    border-radius: 10%;
`

const ProductItem = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Img = styled.img`
    max-width: 180px;
    max-height: 180px;
    /* padding */
`
const Content = styled.div`
  margin: 5px 10px;
`
const TitleProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title {
    color: black;
    margin: 0;
    font-weight: bold;
    font-size: 28px;
  }
`
const Category = styled.p`
  background-color: gray;
  border: 1px solid black;
  border-radius: 5px;
  display: inline-block;
  padding: 2px 4px;
`
const Description = styled.div`
`
const Status = styled.div`
  color: #78A962;
  font-size: 13px;
`