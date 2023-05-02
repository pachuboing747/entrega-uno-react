import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Container from './componentes/Container/Container'
import Productos from './componentes/Productos/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1 className="titulo">Boca Shop</h1>
    <Container greeting={"Productos Destacados"}/>
    <div className='tarjeta'>
      <Productos nombre = "Camisetas" precio = {123} img="public/camiseta.png" />
      <Productos nombre = "Shorts" precio = {456} img="public/short.png" />
      <Productos nombre = "Remeras" precio = {789} img="public/remera.png" />
      <Productos nombre = "Pntalones" precio = {987} img="public/pantalon.png" />
      <Productos nombre = "Buzos" precio = {654} img="public/buzo.png" />
      <Productos nombre = "Camperas" precio = {321} img= "public/campera.png"/>
    </div>
   </>
  )
}

export default App
