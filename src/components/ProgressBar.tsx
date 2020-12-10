import React from 'react'


type PropsType = {
    sold_amount: number 
    amount:number
}
const ProgressBar = (props:any) => {
    const {unit_in_stock, unit_in_order} = props
    const rateProgress = ((unit_in_order/unit_in_stock) * 100) + '%'
    
    return(
        <div style={{textAlign:"center",width:"100%",height:"18px",position:'relative',display:'block',borderRadius:"10px",backgroundColor:"#fddac8"}}>
            <span style={{position:"relative",zIndex:999,height:"auto",margin:"auto",color:"white"}}>
                Đã bán {unit_in_order}
            </span>
            <div style={{width:`${rateProgress}`,bottom:0,height:"18px",borderRadius:"10px 0px 0px 10px",backgroundColor:"orange",position:"absolute"}}>

            </div>
            
        </div>
    )
}


export default ProgressBar