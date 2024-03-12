import { CiLogin } from "react-icons/ci"; 
import { GrContact } from "react-icons/gr"; 
import { FaConnectdevelop } from "react-icons/fa"; 
import { RiLoginCircleFill } from "react-icons/ri"; 
import { Link } from "react-router-dom";
import Profile from "../../private/Profile";


const Productos = () => {
    return(
        <>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="m-1">Productos</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black  w-52">
                    <li><a>Materia Prima</a></li>
                    <li><a>Limpieza</a></li>
                </ul>
            </div>
        </>
    )
}
const Servicios = () => {
    return(
        <>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="m-1">Servicios</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black  w-52">
                    <li><a>Materia Prima</a></li>
                    <li><a>Limpieza</a></li>
                </ul>
            </div>
        </>
    )
}
const Empresas = () => {
    return(
        <>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="m-1">Empresas</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black  w-52">
                    <li><a>Materia Prima</a></li>
                    <li><a>Limpieza</a></li>
                </ul>
            </div>
        </>
    )
}



function PrincipalDrawer() {

    


    return (
        <div>
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost m-1 rounded-none drawer-button md:p-7 ml-6">Abrir Panel</label>
            </div> 
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay blur-lg"></label>
                <div className="z-40 fixed bottom-0"><Profile/></div>
                <ul className="menu p-4 w-80 min-h-full text-white backdrop-blur-lg">
                {/* Sidebar content here */}
                {/* <li><a className="text-2xl"><FaConnectdevelop />Conectarme</a></li>
                <li><a className="text-2xl"><GrContact />Asesoria</a></li> */}
                
                <li className="text-2xl"><Link to="/private"><CiLogin />Mi Cuenta</Link></li>
                <hr />

                <li className=""><Productos/></li>
                <li className=""><Servicios/></li>
                <li className=""><Empresas/></li>
                
                
                </ul>
            </div>
            </div>
        </div>
    )
}

export default PrincipalDrawer
