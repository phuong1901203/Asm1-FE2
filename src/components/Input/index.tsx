import React from 'react'

type Props = {
        type:string,
        placeholder?:string,
        onChange?:(e:any)=> void,
        min?:string
        
}

const Input = ({type,placeholder,onChange,min}: Props) => {
  return (
    <input onChange={onChange} className='w-10'  min={min} type={type} placeholder={placeholder} />
  )
}

export default Input