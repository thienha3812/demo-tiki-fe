import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductService from '../../services/product'
import Description from './components/description'
import Detail from './components/detail'
import Comment from './components/comment'
import SimilarProduct from './components/similar-product'
import {Provider} from './Context';

const Wrapper = styled.div`
    width:100%;
    justify-content:center;
    display:flex;
    margin:0;
    padding:0;
    padding-bottom:10%;
    padding-top:10px;
`
const ProductDetail = (props: any) => {
    const { product_id }: any = useParams()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch()
    },[])
    const [product,setProduct] = useState<any>({})
    const fetch = async() =>{
        const product = await ProductService.getProductById(product_id)
        setProduct(product)
        setLoading(false)
    }
    return (
       <Provider value={{
            product,
            setProduct
       }}>
        <Wrapper>
            {!loading && (
            <div style={{ width: "70%" }}>
                {/* <Row>
                    <Col span={24}>
                            <List>
                                <ListItem>
                                    Trang chủ
                                </ListItem>
                                <ListItem>
                                    Phụ kiện thời trang
                                </ListItem>
                                <ListItem>
                                    Phụ kiện thời trang nam
                                </ListItem>
                                <ListItem>
                                    Găng tay nam
                                </ListItem>
                            </List>
                    </Col>
                </Row> */}
                <Detail />
                <SimilarProduct />
                <Description />
                <Comment />                
            </div>
            )}
        </Wrapper>
       </Provider>
    )
}

export default ProductDetail