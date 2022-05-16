import './Message.style.css'

export const Message = ({text, author, id}) => {
    return (
    <div>
        <span>{author}:</span>
        <span>{text}</span>
    </div>
    )
};