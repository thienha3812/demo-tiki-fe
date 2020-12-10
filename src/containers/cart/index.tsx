import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { cartSelector, setEmpty } from '../../reducers'
import { convertToVnd } from '../../ultis'
import { Modal, Button, Input } from 'antd';
import OrderService from '../../services/order'
import { toast, ToastContainer } from 'react-toastify'


const Wrapper = styled.div`
    padding-left:20%;
    padding-right:20%;
    display:flex;
    flex-direction:column;
`
const PlaceButton = styled.button`
    width:300px;
    background-color:rgb(255, 57, 69);
    color:white;
    outline:none;
    border:none;
    height:50px;
    border-radius:5px;
    
`

const Cart = (props: any) => {
    const [form, setForm] = useState(({ address: "" }))
    const { cart } = useSelector(cartSelector)
    const dispatch = useDispatch()
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const handlePlaceOrder = async () => {
        OrderService.placeOrder(cart, form.address).then(result => {
            toast('Đặt hàng thành công', {
                type: 'success'
            })
            setOpenConfirmModal(false)
            dispatch(setEmpty())

        }).catch(err => {
            if(err.response){
                const { message } = err.response.data
                toast(message, {
                    type: 'warning'
                })
            }
            setOpenConfirmModal(false)
        })
    }
    return (
        <Wrapper>
            <div style={{ fontSize: "20px" }}>
                <b>Giỏ hàng</b>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: "70%" }}>
                    {cart.map((c: any, index: number) => (
                        <div style={{ display: 'flex', background: "white" }}>
                            <div style={{ padding: "20px" }}>
                                <img height="150" width="150" src={c.images[0].src} />
                            </div>
                            <div style={{ display: 'flex', padding: "20px", flexDirection: 'column' }}>
                                <div>
                                    <b>{c.product_name}</b>
                                </div>
                                <div>
                                    Số lượng {c.quantity}
                                </div>
                                <div>
                                    Đơn giá {convertToVnd(c.product_price)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "30%", padding: "10px", marginLeft: "10px", height: "fit-content" }}>
                    <div style={{ backgroundColor: "white", padding: "10px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                Thành tiền
                            </div>
                            <div style={{ fontSize: "30px", color: "#fe3834" }}>
                                {convertToVnd(cart.reduce((a: any, b: any) => a + (b.product_price * b.quantity), 0))}
                            </div>
                        </div>

                    </div>
                    <div>
                        <PlaceButton onClick={() => setOpenConfirmModal(true)} style={{ width: "100%" }}>Tiến hành đặt hàng</PlaceButton>
                    </div>
                </div>

            </div>
            <Modal
                title="Xác nhận đơn hàng"
                visible={openConfirmModal}
                onCancel={() => setOpenConfirmModal(false)}
                okText="Xác nhận"
                onOk={handlePlaceOrder}
                cancelText="Hủy"
            >
                <div>
                    <Input onChange={(event) => setForm({ ...form, address: event.target.value })} placeholder="Địa chỉ" />
                </div>
            </Modal>
            <ToastContainer />
        </Wrapper>
    )
}

export default Cart