import styled from 'styled-components'
import { Card, CardGroup, Figure, Badge } from 'react-bootstrap';

export default function ProductList({ list, type }) {


  return (
    <div>
      <Title>My Donation</Title>
      <Line />

      <Card>
        <ProductItem>
          <Img
            alt="171x180"
            src={list[0].img}
          />

          <Content>
            <TitleProduct>
              <p className='title'>{list[0].title}</p>
              <div className='state'>

                <Status>
                  <i class="fa-check-circle"></i> in stock
                </Status>
              </div>

            </TitleProduct>

            <Badge bg="secondary">{list[0].category}</Badge>

            <Description>
              {list[0].description}
            </Description>
          </Content>
        </ProductItem>
      </Card>

      {list[0].address}
      {type}
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

`
const Img = styled.img`
    max-width: 180px;
    max-height: 180px;
    padding
`
const Content = styled.div`
  margin: 5px 10px;
`
const TitleProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title {
    color: red;
    margin: 0;
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