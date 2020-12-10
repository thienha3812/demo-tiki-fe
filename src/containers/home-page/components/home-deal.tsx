import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io';
import Card from '../../../components/Card';
import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Context } from '../Context';
const HomeDeal = (props: any) => {
    const { products } = useContext(Context)
    const history = useHistory()
    const navigateTo = (p:any) =>{
        history.push(`/detail-product/${p.id}`)
    }
    return (
        <React.Fragment>
            <div style={{ display: "inline-flex", flexWrap: "nowrap", width: "100%",marginTop:'10px', justifyContent: "center" }}>
                <div style={{ width: "70%", backgroundColor: "white", paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                        <div style={{ width: "25%" }}>
                            <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"} />
                            <img style={{ height: "35px" }} src={"https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif"} />
                            <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"} />
                        </div>
                        <div style={{ width: "25%", textAlign: "end" }}>
                            <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
                                <span style={{ color: "rgb(27, 168, 255)", fontWeight: 500, fontSize: "17px", lineHeight: "24px" }}>Xem tất cả</span>
                                <IoIosArrowForward style={{ color: "rgb(27, 168, 255)" }} />
                            </Link>
                        </div>
                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", alignItems: 'center' }}>
                        {
                            products.map((p, index) => (
                                <div onClick={()=>navigateTo(p)} key={index} style={{ width: "19%" }}>
                                    <Card {...p} img_src={p.images[0].src} title={p.product_name} />
                                </div>                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeDeal