import img from "../assets/marcas/nike-air-logo.jpg"

function ModalAccess() {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-ghost" onClick={()=>document.getElementById('my_modal_2').showModal()}>Nike Productos</button>
                <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Esto es Nike</h3>
                    <p className="py-4">Productos de Calidad</p>
                    <img src={img} alt=""/>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                </dialog>
        </div>
    )
}

export default ModalAccess
