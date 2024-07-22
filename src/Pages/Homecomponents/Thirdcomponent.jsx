import React from 'react';
import clinicbg from '../../assets/clinicbg.jpg';

const Thirdcomponent = () => {
  return (
    <>
      <div className='w-[100%] h-auto'>
       
          <div
            className='w-[100%] h-auto'>
                    <div className='w-[100%] h-screen bg-cover bg-center bg-fixed object-cover'
                  
                  style={{ backgroundImage: `url(${clinicbg})`, backgroundAttachment: "fixed" }}
                  alt="Doctor" >
                  </div>

                  
          </div>
     
      </div>
       
     
    </>
  );
}

export default Thirdcomponent;
 