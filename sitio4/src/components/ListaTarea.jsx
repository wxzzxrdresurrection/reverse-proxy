import React, {useState} from "react";
import TareaForm from "./TareaForm";
import Tarea from "./Tarea";
import "../styles/ListaTarea.css";

function ListaTarea() {

    const [tareas, setTareas] = useState([])

    const agregarTarea = tarea => {
       if(tarea.texto.trim()){
           tarea.texto = tarea.texto.trim();
           const tareasActualizadas = [tarea, ...tareas]
           setTareas(tareasActualizadas)
       }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas)
    };

    return (
       <>
       <TareaForm onSubmit={agregarTarea} />
       <div className="tarea-lista-container" >
         {
            tareas.map((tarea) => 
            <Tarea
                key={tarea.id}
                id={tarea.id} 
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea} />
            )
         }
       </div>
       </>
    )
}

export default ListaTarea;