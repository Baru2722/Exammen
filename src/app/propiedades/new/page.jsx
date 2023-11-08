"use client"
import axios from 'axios';
import React, { useState } from 'react'

function PropiedadesForm() {
  const[propiedad, setPropiedades] = useState({
    
    nombre:"",
    direccion:"",
    caracteristicas:"",
    estado:"",
    precioalquiler:""

  });

  const handleChange=(e)=>{
    //console.log(e.target.value, e.target.mane);
    setPropiedades({
      ...propiedad,
      [e.target.nombre]:e.target.value
    });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    //
    const res = await axios.post('/api/propiedades', propiedad);
    if (res.status ==200){
      alert("Registro exitoso"),
      location.href = "/propiedades";
    }else{
      alert("Error en el registro");
    }

    }

return(
   <div className='m-8'>
    <h2 className="text-2x1 font-extrabold text-green-400 hover:text-bg-gray-800">Propiedades</h2>
      <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 mb-4 rounded-md bg-gray-50'>
       <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='nombre'>
        Nombre
        </label>
       <input type = "text" name="nombre" onChange={handleChange} className='bg-green-100 border border-gray-300 
       text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder='Input nombre' />  

         <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='nombre'>
        Direccion
        </label>
       <input type = "text" name="direccion" onChange={handleChange} className='bg-green-100 border border-gray-300 
       text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder='Input direccion' />  

         <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='nombre'>
        Caracteristicas
        </label>
       <input type = "text" name="caracteristicas" onChange={handleChange} className='bg-green-100 border border-gray-300 
       text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder='Input caracteristicas' />  

        <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='nombre'>
        Estado
        </label>
       <input type = "text" name="estado" onChange={handleChange} className='bg-green-100 border border-gray-300 
       text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder='Input estado' /> 

         <label className='block mb-2 text-sm font-medium text-gray-900' htmlFor='nombre'>
        Precio Alquiler
        </label>
       <input type = "text" name="pricioalquiler" onChange={handleChange} className='bg-green-100 border border-gray-300 
       text-gray-900 text-xs rounded-lg block w-full p-2.5' placeholder='Input precioalquiler' />

       <button className='bg-blue-500 hover:bg-blue-700 text-sm text-white
          font-bold py-2 px-4 rounded mt-5'> Guardar </button>  
    </form>
  </div>  
  )
}
export default PropiedadesForm