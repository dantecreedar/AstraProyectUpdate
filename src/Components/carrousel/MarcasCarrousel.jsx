import "../carrousel/slide.css"

import img_1 from "../carrousel/imagenes/1.png"
import img_2 from "../carrousel/imagenes/2.png"
import img_3 from "../carrousel/imagenes/3.png"
import img_4 from "../carrousel/imagenes/4.png"
import img_5 from "../carrousel/imagenes/5.png"
import img_6 from "../carrousel/imagenes/6.png"
import img_7 from "../carrousel/imagenes/7.png"

function MarcasCarrousel() {
    return (
        <div className="">
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={img_1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img_2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img_3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img_4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img_5} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img_6} alt="" />
                    </div>
                    <div className="slide">
                        <img src={img_7} alt="" />
                    </div>

                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                    <div className="slide">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarcasCarrousel
