import React from 'react'
import { BsFacebook, 
         BsInstagram, 
         BsTwitter, 
         BsYoutube 
} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10 mb-5  '>
        <div className='mx-8 my-5 flex flex-col md:flex-row md:justify-between'>

        <div className=''>
            <h1 className='font-bold text-lg mb-4'>Customer Service</h1>

            <Link to='help-centre' className='block mb-4 text-sm text-gray-400 hover:text-orange-500' >Help Centre</Link>
            {/* <a href='../Pages/cs-help-centre.tsx' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Help Centre</a> */}

            <Link to='contact-us' className='block mb-4 text-sm text-gray-400 hover:text-orange-500' >Contact Us</Link>
            {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Contact Us</a> */}

            <Link to='faq' className='block mb-4 text-sm text-gray-400 hover:text-orange-500' >Frequently Asked Questions</Link>
            {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Frequently Asked Questions</a> */}

            </div>

            <div className=''>
            <h1 className='font-bold text-lg mb-4'>About RTU Apparel</h1>
           
           <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500' >About Us</a>
           <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Team</a>
           <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Terms of Service</a>
           </div> 
     

         


        <div className=''>
            <h1 className='font-bold text-lg mb-4'>Payment</h1>
            <p className='mb-4 text-gray-400 text-sm hover:text-orange-500'>GCASH</p>
            <p className='mb-4 text-gray-400 text-sm hover:text-orange-500'>Cash on Delivery</p>
            </div>

            <div className=''>

            <h1 className='font-bold text-lg mb-4'>Logistic</h1>
            <p className='mb-4 text-gray-400 text-sm hover:text-orange-500'>J&T Express</p>
            </div>
    
        
           
        
        </div>

         <div className='mx-8 flex'>
            <div>
            <BsFacebook className='' />
            </div>

            <div className='icons'>
            <BsInstagram/>
            </div>

            <div className='icons'>
            <BsTwitter/>
            </div>

            <div className='icons'>
            <BsYoutube/>
            </div>
            </div>

            <div className='mx-8 mt-5 border-t-2 border-gray-400'>
                <h1 className='mt-4 font-bold text-sm text-black'>© 2023 RTU Apparel. All Rights Reserved.</h1>
            </div>


        
        
        
      </div>
  )
}

export default Footer