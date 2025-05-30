import React from 'react';
import IconEnlace from '../../assets/enlace.png'


const Projects = () => {

  const projects = [
    {
      name: "CRUD en MongoDB",
      description: "Este proyecto es una aplicación que implementa las operaciones básicas de un sistema CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB",
      tecnologias: ["NodeJS", "Mongoose","Typescript","Javascript"],
      img: "",
      link:"github.com/germanfabriziogomez/CRUD_MongoDB",
      url_project: "https://github.com/germanfabriziogomez/CRUD_MongoDB"
    },
    {
      name: "ABM en C++",
      description: "Este proyecto implementa un sistema ABM (Alta, Baja y Modificación) en C++ para gestionar información de manera eficiente",
      tecnologias: ["C++"],
      img: "ProjectC" ,
      link:"github.com/germanfabriziogomez/CPlusPlus_ABM.git",
      url_project: "https://github.com/germanfabriziogomez/CPlusPlus_ABM.git"
    },
    {
      name: "API REST con Express",
      description: "Este proyecto implementa una API REST simple de libros",
      tecnologias: ["Express","Typescript","MongoDB","Node"],
      img: "" ,
      link:"github.com/germanfabriziogomez/CRUD_MongoDB",
      url_project: "https://github.com/germanfabriziogomez/CRUD_MongoDB"
    }
    
  ];

  return (
    <div>
      <div className='w-[90%] mx-auto'>
        <h2>Proyectos:</h2>
        <section className='grid grid-cols-3 gap-7 section-projects'>
          {projects.map((project, index) => (
            <div className='mt-[30px]'>
              <div className='flex flex-col justify-end opacity-50 hover:opacity-100 transition-opacity duration 300 border rounded-[13px] p-10 min-h-full bg-cover' style={{ backgroundImage: `url(${project.img})`}}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className='flex gap-3 p-1 flex-wrap mt-4'>
                  {project.tecnologias.map((elm, index) => (

                    <div className='rounded-[30px] bg-blue-500 p-1'>
                      <p className='text-sm'>{project.tecnologias[index]}</p>
                    </div>
                  ))}
                </div>
                <div className='flex mt-5 items-center'>
                  <img src={IconEnlace} alt="" className='h-[15px] w-[15px]' />
                  <a href={project.url_project} className='overflow-hidden' target='target_blank'>{project.link}</a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
