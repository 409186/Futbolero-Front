import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EquiposPage(){

    const [form, setForm] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log("Nombre =>", name)
        console.log("Valor =>", value)
        return setForm({ ...form, [name]: value });
    }

    return(
        <div>Equipos

            <Button variant="success">Success</Button>
        </div>
        
    )
}