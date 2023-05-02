import Carrito from "../carrito/carrito"



const Productos = ({nombre, img, precio}) => {
    return(
        <div className="card">
            <div>
                <img src={img}></img>
            </div>
            <div>
                <h2>{nombre}</h2>
                <h4>${precio}</h4>
                <button>Ver mas</button>
            </div>
            
        </div>
    )
}


export default Productos