import SearchOffer from "../../Tasks/Search/empresas/SearchOffer"

function Offer() {
    return (
        <div className="bg-slate-100 md:p-2 grid grid-cols-1 gap-2">
            <div className="bg-white shadow-md">
                <div className="p-5 border">
                    <div className="text-4xl">Lo Nuevo</div>
                    <h2 className="">Articulos Relacionado</h2>
                </div>
                <div className="p-5">Ofertas de la Semana</div>
                <div className="text-end border-r-4">
                    <h2 className="p-3 text-2xl bg-gradient-to-l from-slate-100 ">Canasta Actualizada de esta Semana</h2>
                </div>
            </div>
            <div className="p-5 shadow-md bg-white rounded-md">En Stock hasta el 2025</div>

            <div>
                <SearchOffer/>
            </div>
            
        </div>
    )
}

export default Offer
