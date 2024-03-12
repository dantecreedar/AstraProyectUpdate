import { Link } from "react-router-dom"
function AccesModel() {
    return (
        <div>
            <div className="border grid grid-cols-3 grid-rows-2 text-white">
                <div className="border p-3 col-span-4" id="nike">
                    <div>Nike</div>
                    {/* <ModalAccess/> */}
                    <div className="flex justify-center">
                        <ul>
                            <li className='p-5 hover:text-black font-bold'><Link to="/nike" className='flex'><span className='text-xl md:text-md p-2'>Servicios Nike</span></Link></li>
                        </ul>
                    </div>
                
                </div>
                <div className="border p-3 flex justify-center items-center" id="h_1">
                    <h2>Servicios Nike</h2>
                </div>
                <div className="border p-3 flex justify-center items-center" id="h_2">Servicios</div>
                <div className="border p-3 flex justify-center items-center" id="h_3">Comercios</div>
            </div>
        </div>
    )
}

export default AccesModel
