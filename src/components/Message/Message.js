import './Message.style.css'

export const Message = ({text, author }) => {
    return (
    <div>
        <span>{author}:</span>
        <span>{text}</span>
    </div>
    )
};