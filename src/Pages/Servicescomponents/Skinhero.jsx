import React from 'react'
import p3 from "../../assets/p3.png";

const Skinhero = () => {
  return (
    <div className='w-[100%] min-h-[400px] bg-black m-auto flex justify-center items-center etxt-bold text-7xl text-gray-700 'style={{ backgroundImage: `url(${p3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center", backgroundAttachment:"fixed", textShadow:"3px 3px 4px rgba(0,0,0,0.6)"}}>
      SKIN TREATMENT
    </div>
  )
}

export default Skinhero