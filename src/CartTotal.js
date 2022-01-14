import React from 'react';
import styled from 'styled-components';
import  NumberFormat  from 'react-number-format' ; 

function CartTotal({getTotalPrice, getCount}) {

    

    return (
        <Container>
            <SubTotal>SubTotal: ({getCount()} items): 
            <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>
            <CheckoutButton> Proceder to checkout </CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div `
    height:200px;
    flex:0.3;
    padding:20px;
    background-color:white;

`
const SubTotal = styled.h2 `
    margin-bottom: 16px;

`
const CheckoutButton = styled.button `
     background-color: #F0c14b;
     width 100%;
     padding: 4px 8px;
     border: 2px solid #a88734; 
     border-radius:4px;
     cursor:pointer;
     font-size:16px;
     :hover{
         background-color:#ddb347;
     }
`