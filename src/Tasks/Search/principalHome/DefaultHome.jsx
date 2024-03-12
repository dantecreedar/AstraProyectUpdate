import SearchHome from "./SearchHome"

function DefaultHome() {
    return (
        <div>
            <div className="p-5">
                <div className="text-xl">Inicio Menu Descubre</div>
                <div className="p-5">
                    <div className="text-3xl">Explorar Articulos y Noticias</div>
                    <div>Seccion Informativa</div>
                </div>
            </div>
            
            <div>
                <SearchHome/>
            </div>

        </div>
    )
}

export default DefaultHome
