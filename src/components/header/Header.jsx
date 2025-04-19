import React, { useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import FotoDePerfil from '../../assets/foto_de_perfil.png'
import SolIcon from '../../assets/sol.png'
import LunaIcon from '../../assets/luna.png'
import './Header.css'

const Header = () => {

  const [icon, setIcon] = useState(LunaIcon)
  const [isDarkMode,setIsDarkMode] = useState(false)

  const cambiarA = (colorFondo, colorTexto) => {
    document.body.style.backgroundColor = colorFondo
    document.body.style.color = colorTexto
  }
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (icon == SolIcon) {
      cambiarA("black", "white")
      setIsDarkMode(true)
    }
    else {
      cambiarA("white", "black")
      setIsDarkMode(false)
    }
  }, [icon])

  const cambiarIcono = () => {
    if (icon == SolIcon) {
      setIcon(LunaIcon)
    }
    else {
      setIcon(SolIcon)
    }
  }

  const cambiarColorTexto = (link) => {
    setActiveLink(link);  // Establece el enlace activo
  };

  return (
    <>
      <header className='flex items-center gap-55 justify-center w-[90%] m-auto py-[20px] header'>
        {/* en vez de div, cambiar a img para poner la foto */}
        <img src={FotoDePerfil} alt='foto de perfil' className='w-[60px] h-[60px] rounded-[50%] bg-red-300' />

        <nav className='flex gap-5 items-center justify-center p-2 nav'>
          <Link to={"/"} className='px-3 py-1 hover:scale-110 duration-300  font-medium rounded'  onClick={() => cambiarColorTexto('inicio')} style={{ color: activeLink === 'inicio' ? 'rgb(96,216,176)' : (isDarkMode ? 'white' : 'black') }}>Inicio </Link>
          <Link to={"/about-me"} className='px-3 py-1 hover:scale-110 duration-300  font-medium rounded'  onClick={() => cambiarColorTexto('sobremi')} style={{ color: activeLink === 'sobremi' ? 'rgb(96,216,176)' : (isDarkMode ? 'white' : 'black') }}>Sobre mí</Link>
          <Link to={"/projects"} className='px-3 py-1 hover:scale-110 duration-300  font-medium rounded'  onClick={() => cambiarColorTexto('proyectos')} style={{ color: activeLink === 'proyectos' ? 'rgb(96,216,176)' : (isDarkMode ? 'white' : 'black') }}>Proyectos</Link>
          <Link to={"/contact"} className='px-3 py-1 hover:scale-110 duration-300  font-medium rounded'  onClick={() => cambiarColorTexto('contacto')} style={{ color: activeLink === 'contacto' ? 'rgb(96,216,176)' : (isDarkMode ? 'white' : 'black') }}>Contacto</Link>
        </nav>

        <button className='cursor-pointer' onClick={cambiarIcono}><img src={icon} /></button>
      </header>
      
    </>
  )
}

export default Header
