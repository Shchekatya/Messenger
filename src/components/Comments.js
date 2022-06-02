import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadComments } from '../redux/reducers/commentsReducer/commentsReducer';
import { commentsSelector,errorSelector,loadSelector } from '../redux/reducers/commentsReducer/selectors';

const Comments = () => {
    const comments=useSelector(commentsSelector);
    const loading=useSelector(loadSelector);
    const error=useSelector(errorSelector);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadComments())
    }, []);
    
    if (loading) {
        return (
            <div>
                <h3>Идет загрузка</h3>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h3>Что-то пошло не так </h3>
                <button>Попробовать еще раз</button>
            </div>
            
        )
    }
    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>{comment.body} </div>
            ))}
        </div>
    );
};

export default Comments;