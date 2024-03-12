import { Link } from "react-router-dom"


function AccesModelCard() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-3 gap-2 row-span-3">
                <div className="p-5 border" id="nikebg">
                    <ul>
                        <li className='p-5 md:h-56 border hover:text-black'><Link to="/nike" className='flex'>Acceso</Link></li>
                    </ul>
                </div>
                <div className="p-5 border" id="nikebg">
                    <ul>
                        <li className='p-5 md:h-56 border hover:text-black'><Link to="/nike" className='flex'>Acceso</Link></li>
                    </ul>
                </div>
                <div className="p-5 border" id="nikebg">
                    <ul>
                        <li className='p-5 md:h-56 border hover:text-black'><Link to="/nike" className='flex'>Acceso</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccesModelCard
