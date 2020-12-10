import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';
import HomeDeal from './components/home-deal';
import ProductService from '../../services/product';
import { Provider } from './Context';



const List = styled.ul`
    list-style-type:none;
    border: 1px solid #e6e6e6;
    border-radius:5px;
    background-color:white;
`

const ListItem = styled.li`
    font-weight:400;
    font-size:14px;
    color: rgb(68, 68, 68);
    font-weight:400px;
    height:32px;
    line-height:16px;

`



const HomePage = (props: any) => {
    const [products, setProducts] = useState<any[]>([])
    const fetch = async () => {
        const products = await ProductService.getProducts()
        setProducts(products)
    }
    useEffect(() => {
        fetch()
    }, [])
    const lists = [
        {
            title: "Điện Thoại - Máy Tính Bảng"
        },
        {
            title: "Điện tử - Điện Lạnh"
        },
        {
            title: "Phụ kiện - Thiết Bị Số"
        },
        {
            title: "Laptop - Thiết bị IT"
        },
        {
            title: "Máy ảnh - Quay Phim"
        },
        {
            title: "Điện Gia Dụng"
        },
        {
            title: "Nhà Cửa Đời Sống"
        },
        {
            title: "Hàng Tiêu Dùng - Thực Phẩm"
        },
        {
            title: "Đồ chơi, Mẹ & Bé"
        },
        {
            title: "Làm Đẹp - Sức Khỏe"
        },
        {
            title: "Thời Trang - Phụ Kiện"
        },
        {
            title: "Thể thao - Dã Ngoại"
        },
        {
            title: "Xe máy, Ô tô, Xe Đạp"
        },
        {
            title: "Hàng quốc tế"
        },
        {
            title: "Sách, VPP & Quà Tặng"
        },
        {
            title: "Voucher - Dịch vụ - Thẻ cào"
        }
    ]
    return (
        <Provider value={{
            products,
            setProducts
        }}>
            <React.Fragment>
                <div style={{ width: '100%', display: 'flex', justifyContent: "center", marginTop: "10px" }}>
                    <div style={{ width: '15%' }}>
                        <List>
                            {lists.map(item => (
                                <ListItem>{item.title}</ListItem>
                            ))}
                        </List>
                    </div>
                    <div style={{ width: '55%', height: "auto",display:"flex",backgroundColor:"white" }}>
                        <div style={{ display: "flex", flexDirection: "column",width:"58%" }}>
                            <div>
                                <Carousel autoplay>
                                    <div>
                                        <img src={"https://salt.tikicdn.com/cache/w584/ts/banner/a7/d6/c7/dfae31ebe08ec3cb2734927a8f663f10.png"} />
                                    </div>
                                    <div>
                                        <img src={"https://salt.tikicdn.com/cache/w584/ts/banner/a7/d6/c7/dfae31ebe08ec3cb2734927a8f663f10.png"} />
                                    </div>
                                    <div>
                                        <img src={"https://salt.tikicdn.com/cache/w584/ts/banner/a7/d6/c7/dfae31ebe08ec3cb2734927a8f663f10.png"} />
                                    </div>
                                    <div>
                                        <img src={"https://salt.tikicdn.com/cache/w584/ts/banner/a7/d6/c7/dfae31ebe08ec3cb2734927a8f663f10.png"} />
                                    </div>
                                </Carousel>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w292/ts/banner/68/44/e6/f410b985646cb754b07beea727b13554.png"} />
                                </div>
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w292/ts/banner/5d/30/68/1aed21bf2c4f43d486364925cc658156.png"} />
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",width:"40%"}}>
                            <div style={{display:"flex"}}> 
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w206/ts/banner/f5/3f/8a/aa66709fa906fe67d9d84de6f0f79d94.png"} />
                                </div>
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w206/ts/banner/f1/fd/54/af7d7b470a390ffe48148ab073900a86.png"} />
                                </div>
                            </div>
                            <div style={{display:"flex"}}> 
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w206/ts/banner/f5/3f/8a/aa66709fa906fe67d9d84de6f0f79d94.png"} />
                                </div>
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w206/ts/banner/f1/fd/54/af7d7b470a390ffe48148ab073900a86.png"} />
                                </div>
                            </div>
                            <div style={{display:"flex"}}> 
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w206/ts/banner/f5/3f/8a/aa66709fa906fe67d9d84de6f0f79d94.png"} />
                                </div>
                                <div>
                                    <img src={"https://salt.tikicdn.com/cache/w206/ts/banner/f1/fd/54/af7d7b470a390ffe48148ab073900a86.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeDeal />
            </React.Fragment>
        </Provider>
    )
}

export default HomePage