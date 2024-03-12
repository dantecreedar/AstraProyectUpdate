import { useState } from "react";
import { Buscar } from "./Search";

export function Search() {

    //Setear los hooks useState
    const [data, seData] = useState([]);
    const [search, setSearch] = ;

    //funciones para traer datos de la api
    //metodo filtrado 
    //renderizamos la vista
    return (
        <div>
            <div className="p-3">Seach componente</div>
            <Buscar />
        </div>
    );
}
