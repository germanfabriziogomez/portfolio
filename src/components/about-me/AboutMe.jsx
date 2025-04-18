import React from 'react'
import GithubIcon from '../../assets/github-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import CorreoIcon from '../../assets/correo-electronico.png'
import TelefonoIcon from '../../assets/phone.png'
import ImgDecorativa from '../../assets/img-decorativa.webp'

const AboutMe = () => {

  const contacto = [
    {
      icon:GithubIcon,
      socialmedia: "github.com/germanfabriziogomez",
      url:"https://github.com/germanfabriziogomez"
    },
    {
      icon:LinkedinIcon,
      socialmedia: "linkedin.com/in/germanfabriziogomez",
      url:"https://linkedin.com/in/germanfabriziogomez"
    },
    {
      icon:CorreoIcon,
      socialmedia:"german.gomez2@hotmail.com",
      url:""
    },
    {
      icon: TelefonoIcon,
      socialmedia: "+54 9 1158586778",
      url:""
    }

  ]

  return (
    <div className='w-[90%] mx-auto py-[55px] sobremi'>
      <div className='grid grid-cols-2 gap-15'>
        <div className='flex flex-col'>
          <h1 className='px-7 py-3 text-[40px]'>Hola! Me llamo Germán, soy desarrollador Front end </h1>
          <br>
          </br>
          <p className='px-7 py-3 font-sans text-[17px]'>Soy estudiante de Ingeniería en Sistemas en la UTN FRBA, actualmente cursando el 3er año de la carrera. A lo largo de mis estudios, he adquirido una base sólida en programación, tanto estructurada como orientada a objetos, y en el diseño y modelado de sistemas.
            <br />
            <br />
            Tengo experiencia en lenguajes como C y C++, trabajando con herramientas como structs, TADs (templates), nodos y listas enlazadas, y gestionando datos con archivos, vectores, colas y pilas.
            <br />
            <br />
            Además, me he sumergido en el desarrollo de aplicaciones web con React JS, y me he enfocado en mejorar la experiencia del usuario utilizando frameworks como Bootstrap y Tailwind CSS.
            <br />
            <br />
            Tengo conocimiento de Git y GitHub para el manejo de versiones y colaboración en proyectos, así como experiencia en entornos de desarrollo como Eclipse IDE y Visual Studio. Busco constantemente mejorar mis habilidades y ampliar mi experiencia, por lo que estoy interesado en poder aplicar mis conocimientos en nuevos proyectos de desarrollo de software.
            <br />
            <br />
            Actualmente, me encuentro cursando el tramo final de la diplomatura en Back End, lo que me va a pemitir gestionar una aplicacion web completa utilizando herramientas como base de datos (relacionales y no relacionales) para gestionar la persistencia de la información.
            </p>
        </div>

        <div className='flex flex-col justify-between gap-15'>
            <img src={ImgDecorativa} alt="" className='h-[500px] img-aboutme' />
            
          <div className='flex flex-col items-center gap-4'>
            {
              contacto.map(elm =>
                (
                  <div className='flex items-center gap-5 w-[90%] items-center'>
                    <img src={elm.icon} alt="" className='w-[21px] h-[21px]' />
                    <a href={elm.url} target='target_blank' className='hover:text-green-500 duration-300'>{elm.socialmedia}</a>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutMe
