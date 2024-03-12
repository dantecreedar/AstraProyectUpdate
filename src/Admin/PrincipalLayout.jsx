import { TbIcons } from "react-icons/tb"; 
import { IoMdSchool } from "react-icons/io"; 
import { MdLocalOffer } from "react-icons/md"; 
import { FaOdnoklassnikiSquare } from "react-icons/fa"; 
import { FaHome } from "react-icons/fa"; 
import { CgDesignmodo } from "react-icons/cg"; 
import { AiFillFileMarkdown } from "react-icons/ai"; 
import { SiCivicrm } from "react-icons/si"; 
import { FaArrowAltCircleLeft } from "react-icons/fa"; 
import { IoIosHome } from "react-icons/io"
import { SiAzuredataexplorer } from "react-icons/si"
import { Link, Outlet } from "react-router-dom"
import Datafooter from "../Components/footer/Datafooter";
import PrincipalDrawer from "../Shared/Sector/PrincipalDrawer";
import Profile from "../private/Profile";
import MarcasCarrousel from "../Components/carrousel/MarcasCarrousel";

/* panele */

const PanelSuperior = () => {
    return(
        <>
            {/* segundo panel Windows */}
            <div className='bg-white sm:col-span-3 col-span-full w-full'> {/* color  */}
                    <div className='p-5 text-3xl text-slate-600'>Bienvenido! <span className='text-xl'>Esto Es la Plataforma de Astra</span></div>
                    <Outlet/>
            </div>
        </>
    )  
}


  /* mas paneles */



function Navbar() {
    return(
        <>
            <div className="bg-white">
                <div className="md:flex hidden justify-center bg-gradient-to-r from-indigo-950 from-10% via-indigo-700 via-30% to-sky-300 to-90%  fixed w-full z-50">
                    <div className="p-5 text-xl font-bold text-white">ASTRA</div>
                    <ul className='md:flex hidden text-white justify-center '>
                        <li className='p-5 transition-all hover:bg-green-500'><Link to="/" className='flex'><span className="text-2xl"><FaHome /></span></Link></li>
                        <li className='p-5 transition-all hover:bg-blue-500'><Link to="/explorar" className='flex'>Descubre</Link></li>
                        
                        <li className='p-5 transition-all hover:bg-lime-300'><Link to="/offer" className='flex'>Ofertas</Link></li>
                        <li className='p-5 transition-all hover:bg-emerald-400'><Link to="/aprender" className='flex'>Aprende</Link></li>
                        <li className='p-5 transition-all hover:bg-violet-600'><Link to="/private" className='flex'>MiNick</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
function NavbarQuery() {
    return(
        <>
            <div className="bg-white md:hidden">
                    <div className="flex bg-gradient-to-r from-indigo-950 from-10% via-indigo-700 via-30% to-sky-300 to-90% fixed w-full z-50">
                    <ul className='flex text-white justify-center'>
                            <li className='p-5 text-2xl transition-all hover:bg-green-500'><Link to="/" className='flex'><IoIosHome/> </Link></li>
                            <li className='p-5 text-2xl transition-all hover:bg-blue-500'><Link to="/explorar" className='flex'><SiAzuredataexplorer/> </Link></li>
                            <li className='p-5 text-2xl transition-all hover:bg-lime-300'><Link to="/offer" className='flex'><MdLocalOffer /></Link></li>
                            <li className='p-5 text-2xl transition-all hover:bg-emerald-400'><Link to="/educacion" className='flex'><IoMdSchool /></Link></li>
                            <li className='p-5 text-2xl transition-all hover:bg-violet-600'><Link to="/private" className='flex'><FaOdnoklassnikiSquare /></Link></li>
                        </ul>
                        <div className="w-full flex justify-end">
                            <div className="p-5 text-md md:block hidden text-white font-bold">ASTRA</div>
                            <div className="p-5 text-3xl block md:hidden text-blue-500   font-bold"> <TbIcons /> </div>
                        </div>
                        
                    </div>
                </div>
        </>
    )
}

function Blockfoo() {
    return(
        <>
            <div className="grid grid-cols-2 grid-row-2">
                <div className="p-5 text-center font-semibold text-neutral-400">CACTUS STUDIO <span className="font-light">Departamento de Desarrollo</span></div>
                <div className="p-5 text-center font-semibold text-neutral-400">DevHub <span className="font-light">Tecnologia y Investigación</span></div>
            </div>
        </>
    )
}

/* marcas y descuentos */
function Marcas() {
    return(
        <>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="m-1">Marcas</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black  w-52">
                    <li><a>Materia Prima</a></li>
                    <li><a>Limpieza</a></li>
                </ul>
            </div>
        </>
    )
}
/* marcas y descuentos */
function Descuentos() {
    return(
        <>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="m-1">Mis Descuentos</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black  w-52">
                    <li><a>Materia Prima</a></li>
                    <li><a>Limpieza</a></li>
                </ul>
            </div>
        </>
    )
}


function PrincipalLayout() {
    return (
        <div>
            <Navbar/>
            <NavbarQuery/>
            {/* outlet */}
            <div className="p-5"></div>
            <div className="grid grid-cols-1 grid-row-5 z-20">
                <div className="pt-16 bg-white text-black">
                    <div className="flex justify-center">
                        <h1 className="flex p-5">
                            <span className="text-2xl mr-3"><SiCivicrm /></span>
                            <h1 className="">Panel Avanzado</h1>
                        </h1>
                        <div className="md:flex">
                            <ul>
                                <li className="p-4 m-2 border-l-4 hover:text-blue-600 hover:bg-gradient-to-t from-slate-100"><Link to="/panelastra">CRM Panel</Link></li>
                            </ul>
                            <div className="">
                                <PrincipalDrawer/>
                            </div>
                        </div>
                    </div>
                    {/* <Navdetail/> */}
                    {/* marcas */}
                    <div className="grid grid-cols-2 place-items-center text-slate-400">
                        <div className="md:text-3xl flex hover:bg-slate-100 p-3 cursor-pointer"><AiFillFileMarkdown /><span><Marcas/></span></div>
                        <div className="md:text-3xl flex hover:bg-slate-100 p-3 cursor-pointer"><CgDesignmodo /><span><Descuentos/></span></div>
                    </div>
                    <MarcasCarrousel/>
                    <Profile/>
                    <Blockfoo/>
                    <div className="rounded-full text-black opacity-40 p-5 fixed md:right-1  top-16 z-40 text-3xl hover:text-indigo-600">
                        <a href="/explorar"><FaArrowAltCircleLeft /></a>
                    </div>
                    <div className="lg:container m-auto">
                        <div className="shadow-xl">
                            <PanelSuperior/>
                        </div>
                    </div>
                    <MarcasCarrousel/>
                    <Blockfoo/>
                    <Datafooter/>
                </div>
            </div>
        </div>
    )
}

export default PrincipalLayout
