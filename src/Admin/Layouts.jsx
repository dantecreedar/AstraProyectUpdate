import { Outlet,Link } from 'react-router-dom'
import EnterDash from '../Components/EnterpriseDash/EnterDash'
import { IoIosHome } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { SiAzuredataexplorer } from "react-icons/si";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { BsCloudFog2Fill } from "react-icons/bs";
import Drop from '../Tasks/Drop';



/* Paneles */

const Listacomponent = () => {
  return(
    <>
        <ul className='text-indigo-500'>
            <li className='p-5 hover:text-blue-400'><Link to="/" className='flex'><IoIosHome className='text-2xl mr-3'/><span className='text-xl md:text-md'>Descubre</span></Link></li>
            {/* <li className='p-5 hover:text-blue-400'><Link to="/google" className='flex'><IoIosHome className='text-2xl mr-3'/><span className='text-xl md:text-md'>Screen</span></Link></li> */}
            <li className='p-5 hover:text-blue-400'><Link to="/explorar" className='flex'><SiAzuredataexplorer className='text-2xl me-3'/><span className='text-xl'>Dime</span></Link></li>
            <li className='p-5 hover:text-blue-400'><Link to="/notificacion" className='flex'><RiNotificationBadgeFill className='text-2xl me-3'/><span className='text-xl'>Nuevo</span></Link></li>
            <li className='p-5 hover:text-blue-400'><Link to="/servicios" className='flex'><BsCloudFog2Fill className='text-2xl me-3'/><span className='text-xl'>Cloud</span></Link></li>
            <li className='p-5 hover:text-blue-400'><Link to="/login" className='flex'><RiLoginCircleFill className='text-2xl me-3'/><span className='text-xl'>Mi Cuenta</span></Link></li>
        </ul>
    </>
  )
}
const  Listacomponent_icon= () => {
  return(
    <>
        <ul className='text-indigo-500'>
            <li className='p-5 hover:text-blue-400'><Link to="/" className='flex'><IoIosHome className='text-5xl mr-3'/><span className='text-5xl md:text-md'></span></Link></li> <hr />
            {/* <li className='p-5 hover:text-blue-400'><Link to="/google" className='flex'><IoIosHome className='text-2xl mr-3'/><span className='text-xl md:text-md'>Screen</span></Link></li> */}
            <li className='p-5 hover:text-blue-400'><Link to="/explorar" className='flex'><SiAzuredataexplorer className='text-5xl mr-3'/><span className='text-5xl'></span></Link></li> <hr />
            <li className='p-5 hover:text-blue-400'><Link to="/notificacion" className='flex'><RiNotificationBadgeFill className='text-5xl mr-3'/><span className='text-5xl'></span></Link></li> <hr />
            <li className='p-5 hover:text-blue-400'><Link to="/servicios" className='flex'><BsCloudFog2Fill className='text-5xl mr-3'/><span className='text-5xl'></span></Link></li> <hr />
            <li className='p-5 hover:text-blue-400'><Link to="/login" className='flex'><RiLoginCircleFill className='text-5xl mr-3'/><span className='text-5xl'></span></Link></li> <hr />
        </ul>
        
    </>
  )
}



const Paneleft = () => {
  return(
    <>
        {/* panel windows */}
        {/* <div className='h-full md:block hidden bg-white  border-r-2'>
                <div className='fixed'>
                  <h1 className='text-2xl p-5 font-serif'>Conectar ASTRA</h1>
                  <Listacomponent/>
              </div>
        </div> */}
        <div className=' lg:block hidden bg-white '>
                <div className='fixed'>
                  <h1 className='text-2xl p-5 font-sans font-bold'>ASTRA</h1>
                  <Listacomponent/>
              </div>
        </div>
          {/* otro */}
        <div className='lg:hidden sm:block hidden bg-white'>
                <div className='fixed'>
                  <h1 className='text-2xl p-5 font-bold ml-7'>ASTRA</h1>
                  <div className='pl-10'><Listacomponent_icon/></div>
              </div>
        </div>
    </>
  )
}

const PanelSuperior = () => {
  return(
    <>
        {/* segundo panel Windows */}
        <div className='bg-white sm:col-span-3 col-span-full w-full'> {/* color bienvenidos */}
                <div className='p-5 text-3xl text-slate-600'>Bienvenidos! <span className='text-xl'>Esto es Astra Proyect</span></div>
                <Outlet/>
        </div>
    </>
  )  
}

const Panelquery = () => {
  return(
    <>
        {/* panel media query */}
        <div className='w-full fixed bottom-0 md:hidden bg-black p-3'>
              <EnterDash/>
        </div>
    </>
  )
}

const Panelright = () => {
  return(
    <>
        {/* panel tercero windows */}
        <div className='bg-white md:block hidden  text-slate-500 border'>
              <div className='h-full w-full bg-gradient-to-t from-black to-indigo-600'>

              <div className="lg:collapse hidden rounded-md">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-blue-500 peer-checked:bg-white  peer-checked:text-secondary-content">
                <div className='text-3xl'>Observar</div>
                  </div>
                      <div className="collapse-content  bg-primary text-primary-content peer-checked:bg-blue-500 peer-checked:text-white"> 

                          <ul className='p-3'>
                            <li><a><Link className='hover:text-neutral-800' to="/empresa">Empresa</Link></a></li>
                            <li><a><Link className='hover:text-neutral-800' to="/envios">Envios</Link></a></li>
                            <li><a><Link className='hover:text-neutral-800' to="/compra">Compra Online</Link></a></li>
                            <li><a><Link className='hover:text-neutral-800' to="/soporte">Atencion Al Cliente</Link></a></li>
                            <li><a><Link className='hover:text-neutral-800' to="/credito">Genera Credito</Link></a></li>
                          </ul>
                      </div>
                      <Drop/>
              </div>
              
                  {/* panel oculto */}
                  <div className='verPanel'>
                    <ul>
                        <li className='p-5 hover:text-black'><Link to="/" className='flex'><span className='text-xl md:text-md'>Home</span><IoIosHome className='text-2xl mr-3'/></Link></li>
                        <li className='p-5 hover:text-black'><Link to="/explorar" className='flex'><span className='text-xl'>Explorer</span><SiAzuredataexplorer className='text-2xl me-3'/></Link></li>
                        <li className='p-5 hover:text-black'><Link to="/notificacion" className='flex'><span className='text-xl'>Notify</span><RiNotificationBadgeFill className='text-2xl me-3'/></Link></li>
                        <li className='p-5 hover:text-black'><Link to="/servicios" className='flex'><span className='text-xl'>Services</span><BsCloudFog2Fill className='text-2xl me-3'/></Link></li>
                        <li className='p-5 hover:text-black'><Link to="/login" className='flex'><span className='text-xl'>Login</span><RiLoginCircleFill className='text-2xl me-3'/></Link></li>
                    </ul>
                  </div>
              </div>
              
        </div>
            {/* termina aca */}
            
    </>
  )
}

/* const PanelAcces = () => {
  
}
 */

/* Paneles */



function Layouts() {

  return (
    <>
        {/* Component Panel */}
        <div className='grid lg:grid-cols-5 md:grid-cols-4 bg-gradient-to-t from-black to-indigo-600 text-white'>
          <div className='p-5 md:block hidden border'><Paneleft/></div>
          <PanelSuperior/>
          {/* <div className='p-5 col-span-3 md:block hiddle border'>
              <PanelSuperior/>
          </div> */}
          <Panelright/>
          <Panelquery/>
          
          {/* <Paneleft/>
          <PanelSuperior/>
          <Panelquery/>
          <Panelright/> */}
        </div>  
    </>
  )
}

export default Layouts
