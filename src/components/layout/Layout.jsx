import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Contenedor flex con altura mínima al 100% */}
      <Header />
      <main className="flex-grow"> {/* El contenido ocupa el espacio restante */}
      <Outlet />
      </main>
      <Footer /> {/* Siempre al final */}
    </div>
  );
}

export default Layout
