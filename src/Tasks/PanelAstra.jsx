import { BiWinkSmile } from "react-icons/bi"; 
import TableDetail from "./TableDetail"


function PanelAstra() {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-5">
                    <div className="border row-span-4">
                        {/* filtros */}
                        <h2 className="p-3 flex">Selecciona el Filtro Ajuste a tu necesidad <span className="text-2xl"><BiWinkSmile /></span></h2>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 1</div>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 2</div>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 3</div>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 4</div>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 5</div>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 6</div>
                        <div className="p-3 border hover:bg-slate-100 cursor-pointer">filtro 7</div>
                    </div>
                    <div className="p-5 border col-span-2 row-span-5">
                        <TableDetail/>
                    </div>
                    <div className="p-5 border">
                        <h2 className="p-3">Buscas por Filtro</h2>
                        <div>
                            <label className="input input-bordered flex items-center gap-2 bg-white">
                            <input type="text" className="grow bg-white" placeholder="Buscar" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelAstra
