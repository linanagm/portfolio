import React, { useEffect, useState } from 'react'
import heroImage from '../../assets/images/hero.svg'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home(props) {
  
    return (
    <>

    <div className=' mx-auto  text-center p-5 py-24'>
        <div className='hero-img w-1/6 mx-auto mt-24 '>
          <img src={heroImage} alt='hero-image' className='w-full rounded-full drop-shadow-lg' />
        </div>
        <div>
          <h2 className='text-6xl font-bold'>start Framework</h2>
          <div className='title-decorate flex justify-center items-center m-3'>
            <div className='line mx-2'></div>
                <i class="fa-solid fa-star"></i>
            <div className='line mx-2'></div>
          </div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
        
    
    </>
    
  )
}


