import React from 'react'

const Contact = () => {

  const mensajeAlert = () => {
    alert("Tu mensaje fue enviado correctamente")
  }
  return (
   
    <div className='w-[50%] border rounded-[15px] m-auto p-5 mt-[50px] contact'>
      <h3>Envíame un mensaje</h3>
      <form action="" className='p-3 flex flex-col gap-5 items-center'>
        <div className='flex gap-5 flex-col'>
          <div className='flex items-center gap-5'>
            <label htmlFor="">Nombre:</label>
            <input type="text" placeholder='Ingresa tu nombre' className='w-full rounded border px-3 py-1 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          </div>

          <div className='flex items-center gap-5'>
            <label htmlFor="">Mensaje:</label>
            <textarea name="" id="" className='w-full border rounded p-3 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Escribí tu mensaje...'></textarea>
          </div>
        </div>

        <button onClick={() => {mensajeAlert() }} className='border w-[20%] py-2 rounded-[13px] hover:bg-blue-500 hover:text-white duration-300 cursor-pointer'>Enviar</button>
      </form>
    </div>



  )
}

export default Contact
