import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../components/Card'
import ProductService from '../../services/product'



const Search = (props:any) => {
    const history = useHistory()
    const [products,setProducts] = useState([])
    const fetch = async () =>{
        const query  = new URLSearchParams(history.location.search)
        const text_search : String | null = query.get("p")
        const products  = await ProductService.searchProducts(text_search)
        setProducts(products)
    }
    const navigateTo = (p:any) =>{
        history.push(`/detail-product/${p.id}`)
    }
    useEffect(()=>{
        fetch()
        history.listen((location,action)=>{
            fetch()
        })
    },[])
    return ( 
        <Fragment>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <div style={{width:"70%",display:"flex",flexWrap:"nowrap"}}>
                    {products.map((p:any,index)=>(
                        <div onClick={()=>navigateTo(p)} style={{width:"20%"}}>
                            <Card  {...p} img_src={p.images[0].src} title={p.product_name} />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>

    )
}

export default Search