import React from 'react'
import styled from 'styled-components';



function Product() {
    return (
        <Container>
            <Title>
            Acer Aspire 5 Computadora portátil delgada,
             pantalla IPS Full HD de 15.6 pulgadas,
             AMD Ryzen 3 3200U, gráficos Vega 3, 4GB DDR4,
              128GB SSD, teclado retroiluminado, 
              Windows 10 en modo S, A515-43-R19L, plateado</Title> 
            <Price> 
            US$ 439.00 
            </Price>
            <Rating>
            ⭐⭐⭐⭐
            </Rating>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg' />
            <AddCartButton> 
                Add to Cart
            </AddCartButton>
        </Container>
    )
}

export default Product

const Container = styled.div `
    background-color: white;
    z-index:100;
    flex:1;
    padding:20px;  
    margin:10px;  
    height:300px;
`
const Title = styled.span ` `
const Price = styled.span ` `
const Rating = styled.div ` `
const Image = styled.img ` `
const AddCartButton = styled.button `


`