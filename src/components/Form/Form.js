import {useState} from "react";

export const Form = ( {onSubmit}) => {
    const [value, setValue] = useState('');

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleValue} type="text"/>
            <input type="submit"/>
        </form>
    );
};