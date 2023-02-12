import React from 'react'

export const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        
        <div className="mx-5 my-5">
            <h1 className='font-bold text-5xl mt-10 text-orange-500'>Get in touch</h1>
            <p className='text-gray-500 text-justify text-md mt-2 mb-10'>Have a question or need help with an order? Our friendly customer support team is available to assist you. 
            Contact us between 8 a.m. and 8 p.m., and we will respond as quickly as possible!</p>

                <div className='w-full '>

                <div className='md:flex  '>
                <div className='mb-4 md:mr-36'>
                <label className='block font-bold text-sm mb-1'>First Name</label>
                <input type="text" className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96 ' />
                </div>

                <div className='mb-4 '>
                <label className='block font-bold text-sm mb-1'>Last Name</label>
                <input type="text" className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96' />
                </div>
                </div>

                <div className=' md:flex '>
                <div className='mb-4 md:mr-36'>
                <label className='block font-bold text-sm mb-1'>Email</label>
                <input type="text" className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96' />
                </div>

                <div className='mb-4'>
                <label className='block font-bold text-sm mb-1'>Phone</label>
                <input type="text" className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96' />
                </div>
                </div>

                <div className='mb-4'>
                <label className='block font-bold text-sm mb-1'>Subject</label>
                <input type="text" className='border-2 border-black w-full h-9 p-3' />
                </div>

                <div className='mb-4'>
                <label className='block font-bold text-sm mb-1'>Message</label>
                <textarea  className='border-2 border-black w-full p-3 resize-none md:h-32 ' />
                </div>

                <div className='lg:flex justify-end'>
                    <button className='w-full bg-indigo-600 py-2 rounded-md text-white hover:bg-orange-500 lg:w-32'>Submit</button>
                </div>
                
                </div>

        </div>
        
        
    
        
        
    
        
       </div>
  )
}

export default Contact