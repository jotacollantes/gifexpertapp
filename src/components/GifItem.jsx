import React from 'react'

export const GifItem = ({id,title,url}) => {//Desestructuro props como objeto
  return (
       <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
       </div>
  )
}
