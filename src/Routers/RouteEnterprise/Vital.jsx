import { BsPinterest } from "react-icons/bs"; 
import { RiInstagramFill } from "react-icons/ri"; 
import { BsFacebook } from "react-icons/bs"; 
import ModalAccess from "../../modal/ModalAccess"

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import brian from "../../assets/avatar/foto.png"
function Vital() {
    return (
        <div>
            <FloatingWhatsApp
            phoneNumber="3764704718"
            accountName="Cactus Studio"
            statusMessage="Enseguida lo Atenderemos"
            chatMessage="En que podemos ayudarte?"
            placeholder="Escribe un mensaje"
            avatar={brian}
            id="whatsapp"
            />
            <div className="h-auto grid grid-cols-3 grid-rows-5 gap-2 text-black">
                <div className="gap-2 col-span-3 sm:flex">{/* flex */}
                    <div className="p-5 grow shrink-0 bg-white shadow-md flex">
                        <div>
                            <h3 className='text-xl'>Nike Zapatillas de siglo Sucursar Misiones</h3>
                            <div className='w-80 p-2'>Productos Iconicos: Nike es conocida por su amplia gama de productos, incluyendo zapatillas de deporte, ropa deportiva, equipos y accesorios. Sus zapatillas icónicas, como las Air Max y las Air Jordan, son extremadamente populares en todo el mundo.</div>
                            <ModalAccess/>
                        </div>
                    </div>
                    <div className="p-5 grow shrink-0 bg-white"
                    id='nikebg'
                    ></div>
                    
                </div>
                <div className="sm:col-span-1 col-span-3 bg-white">
                    <div className="p-5 bg-white hover:bg-neutral-200">Color</div>
                    <div className="p-5 bg-white hover:bg-neutral-200">Disponibilidad </div>
                    <div className="p-5 bg-white hover:bg-neutral-200">Precio</div>
                    <div className="p-5 bg-white hover:bg-neutral-200">Calidad</div>
                    <div className="p-5 bg-white hover:bg-neutral-200">Envio</div>
                </div>
                <div className="p-5 sm:col-span-2 col-span-3 grid place-items-center bg-white"
                id='nikebg_2'
                ></div>
                <div className="p-5 border col-span-3 grid place-items-center bg-white shadow-xl"
                id="nikeLogo"
                ></div>
                {/* history */}
                <div className="p-5 border card bg-white shadow-xl  text-white md:text-xl flex justify-center items-center"
                id="h_1"
                >NIKE Deportivos</div>
                <div className="p-5 border card bg-white shadow-xl  text-white md:text-xl flex justify-center items-center"
                id="h_2"
                >Nike Calsados Invierno</div>
                <div className="p-5 border card bg-white shadow-xl  text-white md:text-xl flex justify-center items-center"
                id="h_3"
                >Nike Calsados Verano</div>
                <div className="p-5 border col-span-3 bg-white">
                    <div>Rservacion de Turnos</div>
                    <p className='p-3'>Compromiso Social: Nike ha estado involucrada en diversas iniciativas y programas sociales. A lo largo de los años, ha abordado temas como la sostenibilidad, la igualdad de género y la diversidad, trabajando para construir una imagen de marca consciente y comprometida.</p>
                    <div className="text-4xl flex gap-2 p-5 bg-white">
                        <a href=""><BsFacebook /></a>
                        <a href=""><RiInstagramFill /></a>
                        <a href=""><BsPinterest /></a>
                    </div>
                    <hr />
                    <div className="text-end p-5">Cactus Studio</div>
                </div>
            </div>
        </div>
    )
}


export default Vital
