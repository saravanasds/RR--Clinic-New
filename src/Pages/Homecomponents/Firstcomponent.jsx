import React from 'react'
import hairtrans1 from "../../assets/hairtrans1.jpg"

const Firstcomponent = () => {
  return (
 <>
        <div className='w-[100%] h-auto'>
        <h2 className='text-center text-4xl font-semibold p-8'>Feeling utterly hopeless about<span className='text-gray-900'> your hair?</span></h2>
            <div className=' bg-slate-100'>
            <div className='flex flex-row-reverse mx-auto w-[100%] '>
            <div className='w-[50%]  flex flex-col justify-center items-center p-10'>
                <h2 className='text-4xl font-semibold mb-2'>Hair regrowth Solutions ?</h2>
                <h3 className='text-3xl font-semibold text-blue-500'>We got it All..</h3>
            </div>
            <div  className='w-[50%] '>
                <img className='w-[100%] h-[500px] ' src={hairtrans1}/>
            </div>
            </div>
            </div>
           
        </div>
 </>
  )
}

export default Firstcomponent