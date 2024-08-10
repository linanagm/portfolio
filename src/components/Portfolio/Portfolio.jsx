import React, { useEffect, useRef, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import 'animate.css'
import GalleryCard from './GalleryCard'


export default function Portfolio() {
  const imgs = [img1 , img2, img3, img1, img2, img3];
  const [isOpen , setIsOpen] = useState(false)
  const refImg = useRef(null)
  const [currentIndex , setCurrentIndex] =useState(0)

  useEffect(() => {
    document.addEventListener('click' , handleOutsideClick, true)
    
    
    return () => {
      document.removeEventListener('click' , handleOutsideClick, true)
    }
    }, [])
  
  const handleOutsideClick = (e)=>{
    if(refImg.current && !refImg.current.contains(e.target)){
      console.log('outside');
      closeModal()
      
      
      
    }else{
      console.log('Inside');
      
      
      
    }
  }
  function handleIsOpen(index ){
    setIsOpen(true)
    setCurrentIndex(index)
    
  }
  function handleCurrentIndex(index){
    setCurrentIndex(index)
  }

  function closeModal(){
    setIsOpen(false)
  }
  

  return (
    <>
        <div className='bg-white py-20 h-full'>
        <div className='container max-w-screen-xl mx-auto mt-16 text-center flex-col'>
          
          <h2 className='font-bold text-5xl mb-10 text-black'>Portfolio Component</h2>
          <div className='title-decorate flex justify-center items-center m-3'>
            <div className='black-line mx-2 '></div>
                <i class="fa-solid fa-star text-black"></i>
            <div className='black-line mx-2'></div>
          </div>
          
          <div className='gallerys-cards grid grid-cols-3 md:grid-col-2 sm:grid-col-1 gap-5 mb-10'>
            {imgs.map((img , index)=> 
            <GalleryCard 
            key={index} 
            img={img} 
            index={index}
            handleIsOpen={handleIsOpen} 
            handleCurrentIndex={()=>handleCurrentIndex(index)}/>
            )}
            
          </div>

          {isOpen && (
            <div  className='fixed inset-0 z-50   bg-blue-500 bg-opacity-25 flex items-center justify-center'>
              <div ref={refImg}  className='w-2/5 h-2/5 text-opacity-100 mb-32'><img src={imgs[currentIndex]} alt=''/></div>

            </div>

          )}
            
        </div>
        </div>
        
        
    </>
    
  )
}
