import { MdDriveFileRenameOutline } from "react-icons/md"; 
import { useAuth0 } from "@auth0/auth0-react"
import Navdetail from "../Tasks/Other/Navdetail";

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div> </div>
    }

    return (
        isAuthenticated && (
            <div>
                    <Navdetail/>
                    <div className="p-5 grid md:grid-cols-2 place-items-center border bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    {/* profile */}
                    <div className="text-3xl">
                            <h1>Perfil Usuario Astra</h1>
                            <div className="text-xl flex"><span className="text-2xl"><MdDriveFileRenameOutline /></span>{user.nickname} </div>
                    </div>
                    <div>
                        <div className="avatar">
                            </div>
                                <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user.picture} alt={user.name} />
                            </div>
                        </div>
                        <h2 className="text-2xl avatar pt-3 border-b-4"> {user.name} </h2>
                        <p className="pt-5">Email: {user.email} </p>
                    </div>

                </div>
            </div>
        )
        
    )
}

export default Profile
