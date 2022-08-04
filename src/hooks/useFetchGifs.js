import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {//Aqui recibo los argumentos como una funcion normal y no como un props
  const [images, setImages] = useState([])
  const [isloading, setIsloading] = useState(true)
  
  const getImages=async()=> {
        const newImages=await getGifs(category);
        setImages(newImages)
        setIsloading(false)
  }
   //Va a ejecutar algo cuando un state cambie por ejemplo el counter, tambien cuando cambie la category o cuando se renderiza el componte por primera vez
  useEffect(() => {
    getImages()
   }, [])//[] El arreglo de las dependencias se deja vacio cuando es por primera vez  que se renderiza el componente
  
  
    return { //Retorno un objet
    images: images,
    isLoading: isloading
  }
}
