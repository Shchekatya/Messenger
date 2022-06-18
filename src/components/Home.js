import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../redux/reducers/userReducer/selectors';
import Login from './Login';


const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    if(!user) {
        return <Login />
    }
    const handleOut = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 1000)
    }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleOut}>Log out</button>
        </div>
    );
};

export default Home;