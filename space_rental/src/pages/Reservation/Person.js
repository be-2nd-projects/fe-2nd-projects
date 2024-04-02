import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@material-tailwind/react";

const Person = () => {

    const person = useSelector((state)=>state.person);

    const dispatch=useDispatch();
    const deletepersonhandler=()=>{
        dispatch({type:'deleteperson'})
    }

    const addpersonhandler=()=>{
        dispatch({type:'addperson'})
    }

    return (
        <div className='flex justify-center '>
            <Button className="border border-gray-800 px-4 py-2 rounded-lg " onClick={deletepersonhandler}>-</Button>
            <div className='text-4xl'>{person}</div>
            <Button className="border border-gray-800 px-4 py-2 rounded-lg " variant="outlined" onClick={addpersonhandler}> +</Button>
        </div>
    );
};

export default Person;