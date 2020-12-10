import { Col, Row } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../../components/Card'
import ProductService from '../../../services/product'
import { Context } from '../Context'


const Wrapper = styled.div`
    width:100%;
    justify-content:center;
    display:flex;
    margin:0;
    padding:0;
`
const List = styled.ul`
    list-style-type:none;
    margin:0;
    padding:0;
    display:inline-flex;
`
const ListItem = styled.li`
    align-items: center;
    height: 60px;
    color: rgb(153, 153, 153);
    font-size: 13px;
    line-height:30px;
    font-weight: 300;
    display:flex;
    align-items:center;
    font-size:16px;
    white-space: nowrap;
    &:not(:first-child) {
        margin-left:20px;
    }
    &:after {
        content:">";
        background-color:#e6e6e6;
        font-size:40px;
        background-color:transparent;
    }
    
`
const ButtonProductAction = styled.button`
    border-radius:22px;
    box-shadow: rgba(47, 83, 151, 0.1) 0px 2px 6px 0px;
    cursor:pointer;
    border:1px solid #e0e0e0;
    width:40px;
    height:40px;
    &:focus{
        outline:none;
    }
`
const BuyButton = styled.button`
    width:300px;
    background-color:rgb(255, 57, 69);
    color:white;
    outline:none;
    border:none;
    height:50px;
    border-radius:5px;
    
`
const WarpperHTML = styled.div`
    h5 { 
        font-size:17px;
        font-weight:700;
    }
    p { 
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
    
`
const Description = (props: any) => {
    const { product } = useContext(Context)
    return (
        <div style={{ marginTop: "20px"}}>
            <div style={{fontSize:'20px'}}>
                <b>Mô tả sản phẩm</b>
            </div>
            <WarpperHTML>
            <div  dangerouslySetInnerHTML={{__html:product.description.toString()}} style={{ padding:'20px',fontSize:'16px',height:"auto",marginTop: "20px",backgroundColor:'white'}}>
                
            </div>
            </WarpperHTML>
        </div>
    )
}

export default Description
