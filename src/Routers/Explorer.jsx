import Yaguar from "../Page/Yaguar"
import General_article from "../Shared/General_article"
import { RiArticleFill } from "react-icons/ri";
import Start from "../Tasks/Start";

function Explorer() {
  return (
    <div className="bg-gray-100 border text-slate-600">
        <div className="bg-white shadow-md">
            <div className="text-2xl p-5 flex pt-20">Explorar Articulos y Noticias <RiArticleFill className="text-3xl"/></div>
            {/* <Start/> */}
            <span className="pl-5">Seccion Informativa</span>
        </div>
        
        <Yaguar/>

        <General_article/>
    </div>
  )
}

export default Explorer
