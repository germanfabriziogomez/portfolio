import React from 'react'
import './images.js'
import icons from './images.js'
import './Home.css'

const Home = () => {

  const tecnologies = [
    {
      img: icons.HTML,
      description: "HTML"
    },
    {
      img: icons.CSS,
      description: "CSS"
    },
    {
      img: icons.JS,
      description: "Javascript"
    },
    {
      img: icons.REACT,
      description: "React"
    },
    {
      img: icons.TAILWIND,
      description: "Tailwind"
    },
    {
      img: icons.ECLIPSE,
      description: "Eclipse IDE"
    },
    {
      img: icons.C,
      description: "C++"
    },
    {
      img: icons.VSCODE,
      description: "Visual Studio Code"
    },
    {
      img: icons.JAVA,
      description: "Java"
    },
    {
      img: icons.TYPESCRIPT,
      description: "Typescript"
    },
    {
      img: icons.MONGO,
      description: "Mongo DB"
    },
    {
      img: icons.INTELLIJ,
      description: "IntelliJ IDEA"
    },
    {
      img: icons.BOOTSTRAP,
      description: "Bootstrap"
    }
  ]

  return (
    <section className='w-[55%] m-auto home flex flex-col gap-20 section-home'>
      <div>
        <h1 className='text-[30px] mt-[55px]'>Desarrollador Full Stack: Construyendo Soluciones de Software Funcionales y Escalables</h1>
        <p className='mt-[15px]'>Con mi sólida formación en desarrollo web y programación, soy capaz de crear páginas web responsivas, eficientes y optimizadas para ofrecer una experiencia de usuario excepcional en cualquier dispositivo. Mi enfoque está en desarrollar soluciones que no solo sean visualmente atractivas, sino también funcionales y de alto rendimiento.</p>
      </div>
      <div>
        <h2 className='text-[20px]'>Tecnologías, herramientas y frameworks</h2>
        <div className='flex items-center justify-center gap-5 mt-5 flex-wrap'>
          {
            tecnologies.map(elm => (
              <div className='flex flex-col items-center justify-center p-2'>
                <img src={elm.img} alt="" className='w-[30px] h-[30px]' />
                <p>{elm.description}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <h2 className='text-[20px]'>¿Qué me destaca sobre el resto?</h2>
        <p className='mt-[15px]'>
        ✅ Aprendo rápido y me adapto fácilmente:
          Tengo la capacidad de aprender rápidamente nuevos lenguajes y tecnologías, lo que me permite adaptarme de manera ágil a las necesidades del proyecto o cambios en el entorno de desarrollo. Esta flexibilidad me permite estar siempre al día con las últimas tendencias y herramientas.

          <br />
          <br />
          ✅ Sólida formación técnica y enfoque en la calidad:
          Cuento con experiencia en C++, JavaScript, React y tecnologías de frontend como CSS y Tailwind, lo que me permite desarrollar aplicaciones eficientes, escalables y visualmente atractivas. Siempre busco entregar código limpio y optimizado, sin sacrificar la experiencia de usuario.
          <br />
          <br />
          ✅ Mentalidad de resolución de problemas y trabajo en equipo:
          Soy una persona orientada a la solución, con un enfoque práctico para enfrentar desafíos técnicos. Además, tengo habilidades para trabajar en equipo y me comunico de manera efectiva, lo que facilita la colaboración con otros desarrolladores, diseñadores y clientes.
          <br />
          <br />
          ✅ Compromiso y proactividad:
          Me comprometo a entregar soluciones a tiempo y con calidad. Siempre busco mejorar y aprender, lo que me permite afrontar cualquier reto y aportar valor de manera constante.</p>
      </div>
      <div >
        <h2 className='text-[20px]'>Desarrollo Web con Respaldo Certificado</h2>
        <p className='mt-[15px]'>A diferencia de los cursos básicos disponibles, mi formación proviene de una de las facultades más prestigiosas del país. <br /> Cuento con un certificado oficial en Front-End Development que respalda mi formación técnica y habilidades en tecnologías clave como HTML, CSS, JavaScript, React y MongoDB. Este certificado refleja mi compromiso con la excelencia y mi capacidad para desarrollar soluciones web modernas y escalables.</p>
        <h3 className='mt-[15px]'>¿Querés validar mi certificado?</h3>
        <p className='mt-[15px]'>Si deseas verificar mi certificado, haz clic <a href="https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado" target='target_blank' className='text-[rgb(96,216,176)]'><strong className='border-b-2'>aquí</strong></a> e ingresa el código: <strong>CER-3LZ258ES-1473854</strong></p>
      </div>
    </section>
  )
}

export default Home
