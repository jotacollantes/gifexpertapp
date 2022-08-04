import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({category}) => {//Desestructuro Props
  
   //Custom Hook
   const {images,isLoading}=useFetchGifs(category)
   //console.log({images,isLoading})
  //getGifs()
  //No hay que poner funciones aqui porque se va a ejecutar por cada render hay que usar el hook uesEffects

return (
    <>
    <h3>{category}</h3>
    
    {
     
    isLoading && <h2>Cargando...</h2> // se ejecuta un if corto que solo cuando es true se ejecuta la 2da parte de la instruccion
    }
    
    
      
    
    
    <div className='card-grid'>
      
      {images.map(
        (img)=>{
             
            //  const {id,title,url} =img;
            //  if(title.trim()!=="")   
            //  return  <li key={id}>{title}</li>
           
           return <GifItem key={img.id} {...img}/>
           
          })
      }
      </div>
    
    </>
  )
}
