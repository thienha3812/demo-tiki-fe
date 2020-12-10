import { title } from 'process'
import React from 'react'
import ProgressBar from './ProgressBar'


type PropsType = {
    title : string
    price: number
    sold_amount: number 
    amount:number
    discrease_percent: number
    time_rest : string
    root_price: number
    img_src: string

}

const Card = (props:any) => {
    let {title,img_src,unit_in_stock,unit_in_order,product_price,discount}   = props
    const discountPrice = ((discount/100)*product_price)
    const priceBeforeDiscount = product_price - discountPrice
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{width:"100%",height:"230px",backgroundSize:"100% 100%",backgroundImage:`url(${img_src})`}}>
              
            </div>
            <div style={{fontSize:"16px",lineHeight:"20px",height:"40px"}}>
                {title}
            </div>
            <div style={{width:"100%"}}>
                <div style={{width:"50%"}}>
                    <ProgressBar unit_in_stock={unit_in_stock} unit_in_order={unit_in_order} />
                </div>
            </div>
            <div style={{width:"100%"}}>
                <span>
                    <b>{priceBeforeDiscount.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</b>
                </span>
                <span style={{textDecoration:"line-through",marginLeft:"10px"}}>
                    {product_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                </span>
            </div>
        </div>
    )
}

export default Card