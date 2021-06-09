import React from 'react';
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from 'react-router-dom';





function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://www.shopnow.com.ar/images/logoSN.webp"} />
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                  <OptionlineOne>Hello</OptionlineOne>
                  <OptionlineTwo>Select your address</OptionlineTwo> 
               </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                  
                    <HeaderOption>
                       <OptionlineOne>Hola,Julian</OptionlineOne>
                       <OptionlineTwo>Account & Lists</OptionlineTwo>
                    </HeaderOption>

                    <HeaderOption>
                      <OptionlineOne>Returns</OptionlineOne>
                      <OptionlineTwo>& Orders</OptionlineTwo>
                    </HeaderOption>

                    <HeaderOption>
                    <Link to="/cart">
                        <HeaderOptionCart>
                            <ShoppingBasketIcon/>
                            <CartCount>4</CartCount>
                        </HeaderOptionCart> 
                    </Link>
                </HeaderOption>
                   

            </HeaderNavItems>   

            </Container>    
        
    )
}

export default Header

const Container = styled.div `

   height: 60px;
   background-color:#0F1111;
   display:flex;
   align-items:center;
   justify-content: space-between;
   color:white;

`
const HeaderLogo = styled.div`
   img {
       width:100px;
       margin-left: 11px;

   } 
` 

const HeaderOptionAddress = styled.div`
            padding-left:9px;
            display:flex;
            align-items:center;
     
` 
const OptionlineOne = styled.div`

`
const OptionlineTwo = styled.div`
        font-weight:700;
`
const HeaderSearch = styled.div `
      display:flex;
      flex-grow:1;
      height:40px;
      border-radius:4px;
      overflow:hidden;
      margin-left: 4px;
      background-color: white;
      :focus-within{
          box-shadow: 0 0 0 3px #f90;

      }

`
const HeaderSearchInput = styled.input `
    flex-grow: 1;
    border:0;
    :focus{
        outline:none;
    }
  
`
const HeaderSearchIconContainer = styled.div `
   background-color:#febd69;
   width:45px;
   color:black;
   display:flex;
   justify-content:center;
   align-items:center;
`
const HeaderNavItems = styled.div `

   display:flex;


`

const HeaderOption = styled.div `
    
    //trouble
    padding:10px 9px 10px 9px;
    

`
const HeaderOptionCart = styled.div `
        display:flex;
        a {
        display:flex;
        align-items:center;
        padding-right:9px;
        color:white;
        text-decoration:none;
        }
       
`
const CartCount = styled.div `
         padding-left:4px;


`
