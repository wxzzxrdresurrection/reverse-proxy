import React, {useState} from "react";
import "../styles/TareaForm.css";
import { v4 as uuidv4 } from "uuid";

function TareaForm(props){

    const [inputText, setInputText] = useState("");

    const handleChange = e => {
        setInputText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Sending data...")
        const tareaNueva = {
            id : uuidv4(),
            texto: inputText,
            completada: false
        };

        props.onSubmit(tareaNueva)
    };

    return(
        <form className="tarea-form" onSubmit={handleSubmit} >
            <input 
                type="text" 
                name="text" 
                id=""
                className="tarea-input"
                placeholder="Escribe una tarea"
                onChange={handleChange}
             />
             <button className="tarea-btn">Agregar Tarea</button>
        </form>
    )
}

export default TareaForm;