import { Col, Row } from 'antd'
import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addItem } from '../../../reducers'
import { convertToVnd } from '../../../ultis'
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
const InputQuantity = styled.input`
    outline:none;
    &:focus{
        outline:hone
    }
`

const Detail = (props: any) => {
    const [quantity,setQuantity]  =  useState(0)
    const {product} = useContext(Context);

    const dispatch = useDispatch()
    const handleAddItemToCart = () => {
        dispatch(addItem({...product,quantity}))
    }
    return (
        <Row style={{ backgroundColor: "white" }}>
            <Col span={8} style={{ borderRight:"1px solid #e0e0e0",height: "400px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundImage: `url(${product.images[0].src})` }}>

            </Col>
            <Col span={16} style={{paddingLeft:"10px"}}>
                <div style={{ display: "flex", alignItems: "center", paddingTop: "10px", paddingLeft: "10px" }}>
                    <div style={{ width: "80%", color: "#242424", fontSize: "24px", display: "flex", alignItems: 'center' }}>
                        <div style={{ borderRight: "1px solid #e0e0e0", paddingRight: "10px" }}>
                            <img src={"https://salt.tikicdn.com/ts/upload/e9/68/49/50ac83c9f95bd008cc840e638f0f5791.png"} height="32" width="auto" />
                        </div>
                        <div style={{ height: "26px", marginLeft: "12px" }}>
                            {product.product_name}
                        </div>
                    </div>
                    <div style={{ width: "20%" }}>
                        <ButtonProductAction>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" />
                        </ButtonProductAction>
                        <ButtonProductAction>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-account-social.svg" />
                        </ButtonProductAction>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", marginTop: "10px" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingLeft: "10px", width: "50%", padding: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "60px", lineHeight: "30px", display: 'flex', alignItems: 'center' }}><h1 style={{ fontWeight: 700 }}>{convertToVnd(product.product_price)}</h1></div>
                            {/* <div style={{ height: "60px", lineHeight: "30px", display: 'flex', alignItems: 'center', marginLeft: "20px" }}>359.000 ₫</div> */}
                        </div>
                        <div>
                            <b>Hoàn tiền 15% tối đa 600k/tháng </b>
                        </div>
                        <div style={{ borderTop: "1px solid #e6e6e6", marginTop: "20px", paddingTop: "10px" }}>
                            Bạn hãy NHẬP ĐỊA CHỈ nhận hàng để được dự báo thời gian & chi phí giao hàng một cách chính xác nhất.
                                </div>
                    </div>
                    <div style={{ marginLeft: "5px", width: "35%", border: "1px solid #e6e6e6", padding: "5px" }}>
                        <div>
                            Cam kết chính hiệu bởi
                                </div>
                        <div style={{ display: "flex", borderBottom: "1px solid #e6e6e6", }}>
                            <div style={{ width: "40px", height: "40px", backgroundSize: "100% 100%", borderRadius: "50%", backgroundColor: "#e6e6e6", backgroundImage: `url(${product.sku.sku_avatar})` }}>

                            </div>
                            <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
                                <div><b>{product.sku.sku_name}</b></div>
                                <div>Xem Shop</div>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "33%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/icons/compensation.svg"} style={{ width: "24px", height: "24px" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    Hoàn tiền <br />
                                        111% <br />
                                        nếu giả
                                        </div>
                            </div>
                            <div style={{ width: "33%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/guarantee.svg"} style={{ width: "24px", height: "24px" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    Mở hộp <br />
                                        kiểm tra <br />
                                        nhận hàng
                                        </div>
                            </div>
                            <div style={{ paddingTop: "5px", width: "33%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/icons/refund.svg"} style={{ width: "24px", height: "24px" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    Đổi trả trong<br />
                                        30 ngày <br />
                                        nếu sp lỗi
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", padding: "10px" }}>
                    <div>
                        <p style={{ fontSize: "16px" }}>Số Lượng <InputQuantity onChange={(event) => setQuantity(Number(event.target.value))} /></p>
                    </div>
                    <div>
                        <BuyButton onClick={handleAddItemToCart}>
                            Chọn mua
                        </BuyButton>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Detail
