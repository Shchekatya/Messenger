import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusCount, plusCount } from "../../store/action";

const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const handleClickPlus = () => {
        dispatch(plusCount);
    }
    const handleClickMinus = () => {
        dispatch(minusCount)
    }
    return (
        <div>
            <h3>Profile</h3>
            <button onClick={handleClickMinus}>-</button>
            <span>{state.count}</span>
            <button onClick={handleClickPlus}>+</button>
        </div>
    );
};

export default Profile;