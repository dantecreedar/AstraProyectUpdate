import img_1 from "../../assets/image/libertad/1.png"
import img_2 from "../../assets/image/libertad/libertad_local.png"

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import brian from "../../assets/avatar/foto.png"
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function California() {
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
            {/* div logica */}
            <div>
                <div className="grid grid-cols-3">
                    <div className="p-5 border col-span-3 md:col-span-2">
                        <h2 className="text-2xl">Nike Zapatillas de siglo Sucursar Misiones</h2>
                        <p className="text-justify">Productos Iconicos: Nike es conocida por su amplia gama de productos, incluyendo zapatillas de deporte, ropa deportiva, equipos y accesorios. Sus zapatillas icónicas, como las Air Max y las Air Jordan, son extremadamente populares en todo el mundo.</p>
                    </div>
                    <div className="p-5 border md:col-span-1 col-span-3 flex justify-center items-center"><img src="https://planbmisiones.com/wp-content/uploads/2021/08/Logo-California-800x445.jpg" className="w-56"/></div>
                    <div className="p-5 border col-span-3 flex justify-center items-center"><img src="https://creatopyblogsubfolder.kinsta.cloud/blog/wp-content/uploads/2016/06/images-for-banner-ads.png" className="w-7/12 rounded-3xl"/></div>
                    <div className="p-5 border col-span-3">
                        <p className="text-justify">Compromiso Social: Nike ha estado involucrada en diversas iniciativas y programas sociales. A lo largo de los años, ha abordado temas como la sostenibilidad, la igualdad de género y la diversidad, trabajando para construir una imagen de marca consciente y comprometida.</p>
                    </div>
                    <div className="p-5 border"><img src="https://multipoint.com.ar/Image/0/450_450-[global-version]-sm-s918_galaxys23ultra_front_phantomblack_221122.jpg" /></div>
                    <div className="p-5 border"><img src="https://medias.musimundo.com/medias/size300-149452-01.jpg?context=bWFzdGVyfGltYWdlc3wxODA2N3xpbWFnZS9qcGVnfGFEVXlMMmc0Wmk4eE1EVXlOekUxTnpRNE5UVTVPQzl6YVhwbE16QXdYekUwT1RRMU1sOHdNUzVxY0djfDFhMmVlODczMjY0NDRjNzM4OTI4YjI0ZjNhZjgxN2QzNjcyNWNiZWM0MGY1MzMzMTMxNjI4ZDM5OWEzYjM5YzI" /></div>
                    <div className="p-5 border"><img src="https://multipoint.com.ar/Image/0/450_450-a10.jpg     "/></div>
                    <div className="p-5 col-span-3">Redes sociales</div>
                    <div className="flex">
                        <a href="" className="text-3xl p-5"><AiFillInstagram /></a>
                        <a href="" className="text-3xl p-5"><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default California
