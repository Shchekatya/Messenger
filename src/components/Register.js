import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/actions/actions';
import { userSelector } from '../redux/reducers/userReducer/selectors';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate()

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    }, [user, navigate])

const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm) {
        return;
    }
    dispatch(registerInitiate(email, password))
}

    return (
        <div>
            <header style={{width:'100%', height: 70, background: 'red'}}>
                <NavLink style={{ fontSize: 30, textDecoration:'none', color:'white'}} to={'/login'}>
                    Войти
                </NavLink>
                </header>
                <h2>Зарегистрироваться</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input  type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input  type='text' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <button type='submit'>sign up</button>
                </form>
         
            
        </div>
    );
};

export default Register;