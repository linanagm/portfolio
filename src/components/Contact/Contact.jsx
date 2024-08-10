import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Contact() {
  return (
    <>
       <div className='h-full bg-white py-20'>
          <div className='container  max-w-screen-md mx-auto'>

                <div className='py-20 text-center text-gray-900'>
                    <h2 className='font-bold text-5xl mb-10 text-gray-900'> Contact COMPONENT</h2>
                    <div className='title-decorate flex justify-center items-center m-3'>
                      <div className='black-line mx-2'></div>
                          <i class="fa-solid fa-star"></i>
                      <div className='black-line mx-2'></div>
                    </div>

                    <div>
                        <div>
                          <div class="relative">
                              <input type="text" id="user_name" aria-describedby="filled_success_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-10 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-slate-100 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer" placeholder=" " />
                              <label for="user_name" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userName</label>
                          </div>
                        </div>

                        <div>
                          <div class="relative">
                              <input type="number" id="user_age" aria-describedby="filled_success_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-10 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-slate-100 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer" placeholder=" " />
                              <label for="user_age" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userAge</label>
                          </div>
                        </div>

                        <div>
                          <div class="relative">
                              <input type="email" id="user_email" aria-describedby="filled_success_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-10 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-slate-100 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer" placeholder=" " />
                              <label for="user_email" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userEmail</label>
                          </div>
                        </div>

                        <div>
                          <div class="relative">
                              <input type="password" id="user_password" aria-describedby="filled_success_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-10 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-slate-100 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-slate-100 peer" placeholder=" " />
                              <label for="user_password" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userPassword</label>
                          </div>
                        </div>

                        <div>
                          <div className='relative mt-3  flex justify-start'>
                              <button className='bg-green-400 rounded-lg px-7 py-3 text-white'>Send Message</button>
                          </div>
                        </div>

                    </div>
                </div>

          </div>

        
       </div> 
        
    </>
  )
}
