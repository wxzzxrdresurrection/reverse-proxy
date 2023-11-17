import React from "react";
import "../stylesheets/Boton.css";

function Boton({texto, isClickButton, handleClick}){
    return(
        <button 
            className={ isClickButton ? 'boton-clic' : 'boton-reiniciar' } 
            onClick={handleClick} >
            {texto}
        </button>
    )
}


export default Boton;