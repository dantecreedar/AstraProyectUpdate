import { BsFilterLeft } from "react-icons/bs"; 
import { MdOutlineCommute } from "react-icons/md"; 
import { MdMiscellaneousServices } from "react-icons/md"; 
import { AiFillReconciliation } from "react-icons/ai"; 
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import IMAGENES from "../../../Api/searchEnterprise.json"

function SearchEnterprise() {
    //Setear los hooks useState
    const [ users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    //funciones para traer datos de la api
    const URL = "/src/Api/general_database.json";

    const showData = async ()=>{
        const respuesta =   await fetch(URL);
        const data = await respuesta.json();
        console.log(data);
        setUsers(data);
    } 
    
    //meotdo de busqueda

    /* caputar datos con search */
    const searcher = (e) => {
        setSearch(e.target.value);
       /*  console.log(e.target.value) */
    }

    //metodo filtrado - 1 por titulo
    /* let results = [];
    if(!search)
    {
        results = users

    }else{
        results = users.filter((dato)=>
        dato.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } */
    //metodo filtrado - 1 por titulo
    const results = !search ? users : users.filter((dato)=>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    
    useEffect(()=>{
        showData();
    }, [])

    //renderizamos la vista
    return (
        <div>
            <div className="p-5 text-xl">Buscar </div>
            {/* buscador */}
            <div>
                <div className="flex">
                    <input type="text"  className="input input-bordered w-full bg-white m-3 max-w-xs"  placeholder="Buscar" value={search} onChange={searcher}/>
                    <div className="p-5"><span className="text-2xl"><BsFilterLeft /></span></div>
                </div>
            </div>

            {/* enterprise */}
            <div className="grid grid-cols-1">
                {
                        IMAGENES && results.map( (user)=> 
                        <div key={user.id} className="border bg-white">
                            <div>
                                <div className=""> 
                                    <div className="p-3 text-xl"> {user.name} </div>
                                    <div className="flex justify-center items-center transition-all"> <Link to={user.route}> <img src={user.icon} alt="" className="w-36"/> </Link> </div>                     
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="p-5 flex justify-center items-center"><span className="md:text-3xl"><AiFillReconciliation /></span>Productos</div>
                                    <div className="p-5 flex justify-center items-center"><span className="md:text-3xl"><MdMiscellaneousServices /></span>Servicios</div>
                                    <div className="p-5 flex justify-center items-center"><span className="md:text-3xl"><MdOutlineCommute /></span>Comercios</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}

export default SearchEnterprise