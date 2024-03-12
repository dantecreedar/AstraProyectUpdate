import { IoLogoWhatsapp } from "react-icons/io"; 
import { AiFillInstagram } from "react-icons/ai"; 
import img_1 from "../../assets/image/macdonald/logo.png"
import img_2 from "../../assets/image/macdonald/hamburguesa.png"


import { FloatingWhatsApp } from 'react-floating-whatsapp'
import brian from "../../assets/avatar/foto.png"

function Mcdonals() {
    return (
        <div>
            <FloatingWhatsApp
            phoneNumber="549 3764704718"
            accountName="Cactus Studio"
            statusMessage="Enseguida lo Atenderemos"
            chatMessage="En que podemos ayudarte?"
            placeholder="Escribe un mensaje"
            avatar={brian}
            id="whatsapp"
            />
            {/* div logica */}
            <div>
                <div className="grid grid-cols-3">
                    <div className="p-5 border col-span-3 md:col-span-2">
                        <h2 className="text-2xl">McDonald's Argentina y enterate de todo lo nuevo y promociones que tenemos para vos este mes!</h2>
                        <p className="text-justify">Arcos Dorados es el mayor franquiciado independiente de McDonald’s del mundo y la cadena de restaurantes de servicio rápido más grande en América Latina y el Caribe</p>
                    </div>
                    <div className="p-5 border md:col-span-1 col-span-3 flex justify-center items-center"><img src={img_1} className="w-56"/></div>
                    <div className="p-5 border col-span-3 flex justify-center items-center"><img src={img_2} className="w-3/12"/></div>
                    <div className="p-5 border col-span-3">
                        <p className="text-justify">Compromiso McDonald's : McDonald's  ha estado involucrada en diversas iniciativas y programas sociales. A lo largo de los años, ha abordado temas como la sostenibilidad, la igualdad de género y la diversidad, trabajando para construir una imagen de marca consciente y comprometida.</p>
                    </div>
                    <div className="p-5 border"><img src="https://images.rappi.cl/products/tmp314084997262261363606187662.png?d=300x300&e=webp&q=10" /></div>
                    <div className="p-5 border"><img src="https://mcdonalds.es/api/cms/images/mcdonalds-es/7d982d60-348f-4644-8191-a616f4de7709_1080x943_Hamburguesa.png?auto=compress,format" /></div>
                    <div className="p-5 border"><img src="https://images.rappi.com.ar/products/tmpImgedaa5618-01c6-41ca-a73f-5c4640f4956314367924752002147085.png?d=300x300&e=webp&q=10"/></div>
                    <div className="p-5 col-span-3">Redes sociales</div>
                    <div className="flex">
                        <a href="" className="text-3xl p-5"><AiFillInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Mcdonals
