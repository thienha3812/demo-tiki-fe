import { Col, Row,Input, Button } from 'antd'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../../components/Card'
import ProductService from '../../../services/product'
import {API_URL} from '../../../services/apiConfig'
import { Context } from '../Context'
import moment from 'moment'
import { FaHeartBroken } from 'react-icons/fa'
import {ImAttachment} from 'react-icons/im'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../reducers'
import ReviewService from '../../../services/review'
import { toast, ToastContainer } from 'react-toastify'
const { TextArea } = Input;
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
const Review = (props:any) =>{
    const {comment,account,time_created} = props
    return(
        <div key={Math.random()} style={{display:'flex',padding:'10px',marginTop:'10px',backgroundColor:'white',flexDirection:'column'}}>
            <div style={{display:'flex'}}>
                <div style={{height:'50px',width:'50px'}}>
                    <img style={{borderRadius:'50%',width:'100%',height:'100%'}} src={account.avatar}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginLeft:'5px'}}>
                    <div>
                        <b>Khách hàng: {account.holder_name}</b>
                    </div>
                    <div>
                        Nhận xét vào {moment(time_created).format('DD-MM-YYYY')}
                    </div>
                </div>
            </div>
            <div>
                {comment}
            </div>
            <div>
                {props.img_review.map((img:any,index:any)=> (
                    <img key={index} style={{minHeight:'50px',minWidth:'50px'}} height="200" width="200" src={API_URL+"/"+img.img_src} />
                ))}
            </div>
        </div>
    )
}
const SelfReview = (props:any) =>{
    const { product,setProduct } = useContext(Context)
    const [form,setForm] = useState({product_id : product.id,comment:"",rating_level:5,files:[]})    
    const handleSelectFile = () => {        
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = true
        input.click()
        input.onchange = function(event:any){
            setForm({...form,files:event.target.files})
        }
    }
    const handleReview = async() =>{
        let fd = new FormData()
        fd.append('product_id',String(form.product_id))
        fd.append('comment',String(form.comment))
        fd.append('rating_level',String(form.rating_level))
        for(let i = 0 ;i<form.files.length;i++){
            fd.append('img[' + i  + ']',form.files[i])
        }
        console.log(fd.get('product_id'))
        ReviewService.reviewProduct(fd).then((result)=>{
            const { review }  = result
            toast("Bình luận thành công!",{type:"success"})
            setProduct({...product,reviews:[...product.reviews,{...review}]})
            setForm({...form,comment:"",files:[]})
        }).catch(err=>{
            console.log(err.response)
        })
    }
    return( 
        <Fragment>
            <TextArea onChange={(event)=> setForm({...form,comment:event.target.value})} style={{resize:"none"}} rows={3}  placeholder={"Chia sẻ cảm nhận của bạn?"} />
            <div style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>
                <Button onClick={handleSelectFile}  icon={<ImAttachment/>} type="primary" style={{marginRight:"10px"}}>Đính kèm hình ảnh</Button>
                <Button onClick={handleReview}  type="primary">Bình luận</Button>
            </div>
        </Fragment>
    )
}
const Comment = (props: any) => {
    const { product,setProduct } = useContext(Context)
    return (
        <Fragment>
        <div style={{ marginTop: "20px"}}>
            <div style={{fontSize:'20px'}}>
                <b>KHÁCH HÀNG NHẬN XÉT</b>
            </div>
            {product.reviews.map(((review,index) => ( 
                <Review {...review}  />
            )))}
        </div>
        <SelfReview/>
        <ToastContainer/>
        </Fragment>
    )
}

export default Comment
