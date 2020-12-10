import Ract, { useState } from 'react'
import styled from 'styled-components'
import { Input,Button } from 'antd';
import { UserOutlined,KeyOutlined } from '@ant-design/icons';
import AccountService from '../../services/account';
import { toast ,ToastContainer} from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeItem, setUser } from '../../reducers';
import { useHistory } from 'react-router-dom';



const Wrapper = styled.div`

    padding-left:40%;
    padding-right:40%;
    padding-top:15%;
    text-align:center;
`

const Login  = (props:any) =>{
    const [form,setForm] = useState({email:"",password:""})
    const dispatch = useDispatch()
    const history = useHistory()
    const [timeCount,setTimeCount] = useState(5)
    const handleLogin = async() =>{
        AccountService.login(form.email,form.password).then((data)=>{
            const {success,token} = data
            if(success){
                toast(`Đăng nhập thành công, chuyển hướng trong  ${timeCount} giây `,{autoClose:6000,type:"success"})
                dispatch(setUser({token,account_info:data.account_info}))
                setTimeout(()=>{
                    history.push('/home')
                },5000)
            }else{
                toast("Đăng nhập thất bại",{autoClose:1000,type:"error"})
            }
        })
    }
    return( 
        <Wrapper>
               <Input size="large" placeholder="Tài khoản" prefix={<UserOutlined />} onChange={(event)=> setForm({...form,email:event.target.value})} />
               <Input type="password" size="large" style={{marginTop:"10px"}} placeholder="Mật khẩu" onChange={(event)=> setForm({...form,password:event.target.value})} prefix={<KeyOutlined />} />
               <Button size="large" type="primary" style={{marginTop:"10px"}} onClick={handleLogin}>Đăng nhập</Button>
               <ToastContainer/>
        </Wrapper>
    )
}


export default Login