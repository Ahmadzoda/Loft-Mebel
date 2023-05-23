import React from 'react'

export default function Firstcard(props) {
  return (
    <div className='firstcard'>
        <div className="first-card bg-[white] w-[250px] h-[290px]">
            <div className="first-image flex justify-center pt-[20px]"><img className='w-[90%]' src={props.img} alt="" /></div>
            <div className="first-text pl-[12px] pt-[10px] "><h1 className='text-xl text-[#414141] '>{props.text}</h1></div>
            <div className="first-title pl-[12px]"><p className='text-[gray] text-lg'>{props.title}</p></div>
            <div className="first-mine pl-[12px]"><h1 className='text-xl text-[#414141] ' >{props.mine}</h1></div>
        </div>
    </div>
  )
}
