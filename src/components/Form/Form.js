import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useRef } from "react";
import {useState} from "react";

export const Form = ( {onSubmit}) => {
    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleValue = (e) => {
        setValue(e.target.value)
    }
    useEffect(()=>{
        inputRef.current?.focus();
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleValue} type="text" id="standard-basic" label="Your message here" variant="standard" inputRef={inputRef}/>
            <Button variant="outlined" type="submit">Send</Button>
        </form>
    );
};