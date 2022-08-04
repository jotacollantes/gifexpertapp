import { useState } from "react"

export const AddCategory = ({functionNewCategory}) => {//Desestructuro props que es un objeto
  
  const [inputValue, setInputValue] = useState('')
  const onInputChange=(e)=> {
    //console.log(e)
    setInputValue(e)
  }
  const enviaFormulario=(e)=> {
    e.preventDefault(); //Para que no se refresque el navegador que es el conportamiento por defecto cuando se ejecuta o se envia un formulario
    if(inputValue.trim().length <= 1) return //Si el valor ingresado es vacio o u solo caracter no se continua
    //console.log('addCategory', inputValue)
    functionNewCategory(inputValue.trim())
    setInputValue('');//Limpiamos el inputValue (state) para que se limpie el inputText

  }
  
  return (
    <form onSubmit={(e)=>{
      return enviaFormulario(e)
    }}>
      <input
    type="text" 
    placeholder="Buscar Gifs"
    value={inputValue}
    onChange={(e)=> {
          return onInputChange(e.target.value)
    }}
    />
    </form>
    
  )
}
