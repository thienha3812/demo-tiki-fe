import { Col, Input, Row ,Button as AnButton} from 'antd'
import Grid from 'antd/lib/card/Grid'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.png'
import {FaUser} from 'react-icons/fa'
import {IoMdNotifications} from 'react-icons/io';
import {HiShoppingCart} from 'react-icons/hi';
import {AiOutlineMenu} from 'react-icons/ai';
import {RiArrowDownSLine} from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  userSelector,logout, cartSelector } from '../reducers'
const Header = styled.header`
    background-color:rgb(24, 158, 255);

`
const Button  = styled.button`
    outline:none;    
    color:white;
    background-color:transparent;
    height:100%;
    border-radius:5px;
    height:40px;
    border:2px solid #fff;
`
const {Search} = Input
const NavBar = (props:any) =>{
    const {account_info,isLogged} = useSelector(userSelector)
    const {cart} = useSelector(cartSelector)
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
    }
    return( 
        <React.Fragment>
            <Header>
                <div style={{display:'flex',flexWrap:'nowrap',justifyContent:'center'}}>
                    <Link to="/home" style={{width:"10%"}}>
                        <img src={Logo}     />
                    </Link>
                    <div style={{display:'flex',alignItems:'center',width:'25%'}}>
                        <Search  placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." size="large" />
                    </div>
                    <div style={{display:'flex',alignItems:'center',width:'35%'}}>
                        <div style={{width:"25%"}}>
                            <a href="javascript:void(0)" style={{display:'inline-flex',alignItems:'center'}}>
                                <div style={{height:"100%"}}>
                                <FaUser size={30}  style={{marginTop:'5px'}}/>
                                </div>
                                <div>
                                    Theo dõi <br/> đơn hàng
                                </div>
                            </a>
                        </div>
                        <div style={{width:"25%"}}>
                            <a href="javascript:void(0)" style={{display:'inline-flex',alignItems:'center'}}>
                                <div style={{height:"100%"}}>
                                <IoMdNotifications size={30}  style={{marginTop:'5px'}} color="#fff"/>
                                </div>
                                <div>
                                    Thông báo <br/> của tôi
                                </div>
                            </a>
                        </div>
                        <div style={{width:"25%"}}>
                            <Link to="/login" style={{display:'inline-flex',alignItems:'center'}}>
                                <div style={{height:"100%"}}>
                                <FaUser size={30}  style={{marginTop:'5px'}}/>
                                </div>
                                {!isLogged && (
                                    <div>
                                        Đăng nhập <br/> Tài khoản   
                                    </div>
                                )}
                                  {isLogged && (
                                    <div>
                                        Xin chào {account_info.holder_name} <br/> 
                                        <div onClick={handleLogout}>
                                            Đăng xuất
                                        </div>
                                    </div>
                                )}
                            </Link>
                        </div>
                        <div style={{width:"25%"}}>
                            <a href="javascript:void(0)" style={{display:'inline-flex',alignItems:'center'}}>
                                <div style={{height:"100%"}}>
                                <FaUser size={30}  style={{marginTop:'5px'}}/>
                                </div>
                                <Link to="/cart">
                                    <Button style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                        <HiShoppingCart size={20}/>
                                        Giỏ hàng
                                        <span style={{marginLeft:'2px',backgroundColor:"#fdd835",padding:'0px 6px',color:"black",borderRadius:'2px',height:'20px'}}>
                                            {cart.length}
                                        </span>
                                    </Button>
                                </Link>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                        <div style={{width:'13%'}} >
                            <AnButton  style={{border:'none',backgroundColor:'transparent',color:'white',fontSize:'16px',lineHeight:'27px',display:'inline-flex',alignItems:'center'}} icon={<AiOutlineMenu size={25}/>}>Danh mục sản phẩm</AnButton>
                        </div>
                        <div style={{width:'10%'}}>
                            <a>Bạn muốn giao hàng tới đâu</a>                        
                        </div>
                        <div style={{width:'6%'}}>
                            <a style={{height:"32px",lineHeight:"16px",display:"flex",alignItems:"center"}}>
                                <div style={{display:"inline-flex"}}>
                                    <div>
                                        <RiArrowDownSLine size={25}/>
                                    </div>
                                    <div>
                                        Sản phẩm <br/> bạn đã xem
                                    </div>
                                </div>
                            </a>                                                   
                        </div>
                        <div style={{width:'8%'}}>
                            <a style={{height:"32px",lineHeight:"16px"}}>
                                <div style={{display:"inline-flex"}}>
                                    <div>
                                        <img src={"https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg"} />
                                    </div>                                
                                    <div style={{marginLeft:"5px"}}>Hoàn tiền<br/> 15%</div>
                                </div>
                            </a>                        
                        </div>
                        <div style={{width:'10%'}}>
                            <a style={{height:"32px",lineHeight:"16px"}}>
                                <div style={{display:"inline-flex"}}>
                                    <div>
                                        <img style={{height:"28px"}}  src={"https://salt.tikicdn.com/ts/upload/c1/cc/d0/6dc657167181c1b6b93c8da654dddac3.png"} />
                                    </div>                                
                                    <div style={{marginLeft:"5px"}}>Giao nhanh<br/> 2h & hôm sau</div>
                                </div>
                            </a>                        
                        </div>
                        <div style={{width:'10%'}}>
                            <a style={{height:"32px",lineHeight:"16px"}}>
                                <div style={{display:"inline-flex"}}>
                                    <div>
                                        <img style={{height:"28px"}}  src={"https://salt.tikicdn.com/ts/upload/c1/cc/d0/6dc657167181c1b6b93c8da654dddac3.png"} />
                                    </div>                                
                                    <div style={{marginLeft:"5px"}}>Thực phẩm <br/> tươi sống</div>
                                </div>
                            </a>                        
                        </div>
                        <div style={{width:'8%'}}>
                            <a>Sản phẩm<br/> chính hiệu</a>                        
                        </div>
                        <div style={{width:'8%'}}>
                            <a>30 ngày <br/> đổi trả</a>                        
                        </div>
                    
                </div>
            </Header>
        </React.Fragment>
    )
}
export default NavBar;