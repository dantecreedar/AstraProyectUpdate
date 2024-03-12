import { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import IMAGE from "../../../Api/searchOffer.json"

function SearchOffer() {
    //Setear los hooks useState
    const [ users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    //funciones para traer datos de la api
    const URL = "/src/Api/searchOffer.json";

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
            {/* buscador */}
            <div>
                <div className="flex">
                    <input type="text"  className="input input-bordered w-full bg-white m-3 max-w-xs"  placeholder="Buscar" value={search} onChange={searcher}/>
                    <div className="p-5"><span className="text-2xl"><BsFilterLeft /></span></div>
                </div>
            </div>

            {/* enterprise */}
            <div className="grid md:grid-cols-3 place-items-center bg-white p-5">
                {
                        IMAGE &&  results.map( (user)=> 
                        <div key={user.id} className="">
                            <div className="card xl:w-96 shadow-xl m-3 rounded-none">
                                <figure><img src={user.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    {user.name}
                                    <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                                {/* modal */}
                                <div>
                                    <button className="btn btn-ghost rounded-none" onClick={() => document.getElementById('my_modal_5').showModal()}>Abrir Producto</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box bg-white ">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-ghost rounded-none">Close</button>
                                            </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SearchOffer
