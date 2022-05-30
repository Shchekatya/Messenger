import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_MESSAGES, DELETE_MESSAGES } from '../redux/actions/actions';
import { messageSelector } from '../redux/reducers/messagesReducer/selectors';

const Messages = () => {
    const {idParam} = useParams();
    const [title, setTitle] = useState();
    const dispatch = useDispatch();
   const chatsMessage = useSelector(messageSelector);
   const message = chatsMessage.filter((message) => {
       if (!idParam) return true;
       return message.chatId === Number(idParam)
   })

   const addMessage= () => {
       const obj ={
           id: Date.now(),
           chatId: idParam,
           title: title,
       }
       dispatch({type: ADD_MESSAGES, payload: obj})
   }

   const deleteMessage = (id) => {
       dispatch({ type: DELETE_MESSAGES, payload: id})
   }
    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addMessage}>Add</button>
            {message.map ((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div><button onClick={() => deleteMessage(item.id)}>del</button></div>

                </div>
            ))}
        </div>
    );
};

export default Messages;