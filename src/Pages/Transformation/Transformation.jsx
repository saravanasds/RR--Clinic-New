import React from 'react'

const data = [
  {
    id: 1,
    img: b1,
  },
];

const Transformation = () => {
  return (
   <>
      
      <div className='w-[100%] h-auto flex justify-center items-center'>
      <div className='w-[80%] h-auto grid grid-cols-2 '>
      {data.map((a) => (
         <img src={b1}/>
        ))}
      </div>   
             

      </div>

   </>
  )
}

export default Transformation;