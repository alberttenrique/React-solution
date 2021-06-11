import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';

function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () => { 
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []

            console.log(snapshot);


        })
    }

    getProducts()

    return (
        <Container>
            <Banner> 
            
            </Banner>
            <Content>
                <Product />
                <Product />
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div `
    max-width:1500px;
    margin: 0 auto;

`
const Banner = styled.div `
        background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_es_US_1x._CB667161802_.jpg');
        min-height:600px;    
        background-position:center;
        background-size: cover;
        z-index: 1;
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));


`

const Content = styled.div `
    background:white;
    padding-left:10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index:100px;
    display:flex;
`

