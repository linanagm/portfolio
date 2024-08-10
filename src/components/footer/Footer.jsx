import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function FooterComp() {
  return (<>
    <footer className=' bg-gray-700  text-white w-full '>
      
      <div className='container mx-auto text-center flex flex-col '>

          <div className='card-group flex my-24'>

              <div className='card w-1/3'>
                <h3 className='font-bold tracking-wider text-3xl'>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

              <div className='card w-1/3'>
                <h3>AROUND THE WEB</h3>

                <div className='icons m-3'>
                  <a className='social-icon '>
                  <i className="fa-brands fa-facebook"></i>
                  </a>

                  <a className='social-icon'>
                    <i class="fa-brands fa-twitter"></i>
                  </a>

                  <a className='social-icon'>
                    <i class="fa-brands fa-linkedin-in"></i>

                  </a>
                  
                  <a className='social-icon'>
                    <i class="fa-solid fa-globe"></i>
                  </a>
                  
                </div>
              </div>

              <div className='card'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>

          </div>
          <div className='copy-right bg-gray-900 py-5  flex-grow'>
          <p>Copyright © Your Website 2021</p>
          </div>

      </div>

    </footer>
  
  </>)    
  
}
