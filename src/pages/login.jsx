import '../styles/root.scss'
import Navbar from '../components/navbar';
import { useState } from 'react';
import { Title } from '../components/styledComponents';
import { Input, Button } from '@mui/joy';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/userAPI';

export default function Login() {
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        security_code: ''
    })

    const inputStyle = {
        backgroundColor: 'transparent',
        color: '#59ecc9',
        marginTop: '20px'
    }

    const loginMutation = useMutation({
        mutationFn: async (data) => {
            return await login(data)
        },
        onSuccess: (data) => {
            setToken(data.token)
            localStorage.setItem('token', data.token)
        },
        onError: (error) => {
            console.error(error)
        }
    })

    const logoutMutation = useMutation({
        mutationFn: async () => {
            setToken(null)
            localStorage.removeItem('token')
        }
    })


    return (
        <div className='root-container'>
            <Navbar />
            {
                !token ? (
                    <>
                        <Title>Login</Title>
                        <Input onChange={(e) => setLoginData({...loginData, username: e.target.value})} sx={inputStyle} placeholder="Username" variant="outlined" />
                        <Input onChange={(e) => setLoginData({...loginData, password: e.target.value})} sx={inputStyle} placeholder="Password" type='password' variant="outlined" />
                        <Input onChange={(e) => setLoginData({...loginData, security_code: e.target.value})} sx={inputStyle} placeholder="Security Code" variant="outlined" />
                        <Button onClick={() => loginMutation.mutate(loginData)} variant='outlined' style={{color:'#42b398', marginTop: '20px'}}>Log In</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => logoutMutation.mutate()} variant='outlined' style={{color:'#42b398', marginTop: '20px'}}>Log Out</Button>
                    </>
                )
            }
        </div>
    )
}