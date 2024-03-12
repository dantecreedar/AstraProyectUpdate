import {Auth0Provider} from "@auth0/auth0-react"
import Login from "../Services/Login"
import Logout from "../Services/Logout"
import Profile from "./Profile"
import { useAuth0} from "@auth0/auth0-react"

export default function PrivatePage() {
    const { isAuthenticated } = useAuth0();


    if(isAuthenticated) {
        return(
            <>
                <Logout/>
                <Profile/>
            </>
        )
    }else{
        return(
            <>
                <div className="p-5 grid md:grid-cols-2 place-items-center border bg-slate-100">
                    <div className="p-3">
                        <h1 className="text-4xl font-bold text-blue-600">ASTRA PROYECT</h1>
                        <p>Astra te ayuda a comunicarte y a acceder al banco de informacion para poder mejorar tu vida</p>
                    </div>
                    <div>
                        <div className="border p-5 lg:flex justify-center bg-white shadow-lg">
                            <h2 className="text-xl flex justify-center items-center">Accede a mas Contenido</h2>
                            <div className="p-2 flex justify-center items-center"><Login/></div>
                        </div>
                        <div className="text-sm p-3">Crea una página para un famoso, una marca o una empresa.</div>
                    </div>
                </div>
            </>
        )
    }
}
