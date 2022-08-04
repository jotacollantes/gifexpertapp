import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory=(newCategory)=> {

        //console.log('Categories', categories)
        if(categories.includes(newCategory))// Si la nueva categoria ya esta en el arreglos se sale de la funcion y no hace nada.
        {
            return;
        }
        //actualizo el estado que es un array con un spread de todos los elementos actuales + el nuevo elemento
        //console.log('GifExpert',newCategory)
        setCategories([newCategory,...categories])
        //Tambien se puede hacer con callback
        // setCategories((cat)=>{
        //    return  [...cat,'Mazinger']
        // })
        
    
    }
    
  return (
    
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>
    {/* input */}
        <AddCategory functionNewCategory={(args)=>{
            return onAddCategory(args)
        }}
        />
        {
                
                categories.map((category)=>
                    //va a retornar un objeto
                    // {
                    // return (
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li >{category}</li>
                    //     </div>
                    // )}
                    (<GifGrid
                        key={category} 
                        category={category}/>)// a pesar de que no esta definido explicitaente como prop en el componente GifGrid React ya sabe que ese es el key del elemento
                )
            }
    </>
    
)
}
