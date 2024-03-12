import { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import IMAGE from "../../../Api//SearchHome.json"

function SearchHome() {
     //Setear los hooks useState
        const [ users, setUsers] = useState([]);
        const [search, setSearch] = useState("");
    
        //funciones para traer datos de la api
        const URL = "/src/Api/SearchHome.json";
    
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
            dato.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
        
        useEffect(()=>{
            showData();
        }, [])
    
    return (
        <div>
            <div className="p-5 text-xl">Buscar Producto</div>
            <div>
                <div className="flex">
                    <input type="text"  className="input input-bordered w-full bg-white m-3 max-w-xs"  placeholder="Buscar" value={search} onChange={searcher}/>
                    <div className="p-5"><span className="text-2xl"><BsFilterLeft /></span></div>
                </div>
            </div>

             {/* Home */}
                <div className="grid grid-cols-1">
                {
                        IMAGE && results.map( (user)=> 
                        <div key={user.id} className="border bg-white">
                            <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                        <tr>
                                            <th> Id </th>
                                            <th>Articulo Servicio</th>
                                            <th>Stock</th>
                                            <th>US/ARG</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.stock}</td>
                                            <td>Costo</td>
                                        </tr>
                                    
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    )
                }
            </div>
            {/* card home */}
            {/* enterprise */}
            <div className="grid md:grid-cols-3 place-items-center bg-white p-5">
                {
                        results.map( (user)=> 
                        <div key={user.id} className="">
                            <div className="card xl:w-96 shadow-xl m-3 rounded-none">
                                <figure><img src={user.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    {user.name}
                                    <div className="badge badge-secondary">Nuevo</div>
                                    </h2>
                                    <p>Descripcion del producto o servicio a proporcionado de la empresa</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SearchHome
