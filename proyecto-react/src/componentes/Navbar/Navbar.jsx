import Carrito from "../carrito/carrito"

const Navbar = () =>{
    return(
        <nav className="nav-bar">
            <div className="navbar-botones">
                <button className="btn-index">Camisetas</button>
                <button className="btn-index">Shorts</button>
                <button className="btn-index">Remeras</button>
                <button className="btn-index">Pantalones</button>
                <button className="btn-index">Buzos</button>
                <button className="btn-index">Camperas</button>
                <Carrito/>
            </div>
        </nav>
    )
}

export default Navbar