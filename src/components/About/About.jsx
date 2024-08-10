import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'

export default function About() {
  return (
    <>
        <div className='container max-w-screen-xl mx-auto my-60 text-center items-center'>
          <div className='flex-col items-center pt-10 '>
            <h2 className='text-4xl font-bold'>About COMPONENT</h2>
            <div className='title-decorate flex justify-center items-center m-3'>
              <div className='line mx-2'></div>
                  <i class="fa-solid fa-star"></i>
              <div className='line mx-2'></div>
            </div>

            <div className='wrap flex justify-center text-start'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          
        </div>
    </>
    
  )
}
