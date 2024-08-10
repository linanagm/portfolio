import React, { useEffect, useRef, useState } from 'react'
import 'animate.css'
import'./portfolio.css'

export default function GalleryCard({img, index, isOpened, onOpen, onClose, handleIsOpen, handleCurrentIndex}) {
    const [isHovered, setIsHovered] = useState(false);
    

  return (<>
  <div
      className="gallery-card overflow-hidden relative rounded-lg h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={()=>handleIsOpen(index)}

  >

    <img src={img} alt={`Gallery Item ${index + 1}`} className="w-full h-full object-cover" />

    <div
      className={`overlay flex justify-center items-center absolute top-0 left-0 w-full h-full ${
        isHovered ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}`}
      style={{
        backgroundColor: 'rgba(27, 183, 162, 0.7)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.5s',
      }}
    >
      <i className="fa fa-plus text-white text-6xl"></i>
    </div>
  </div>

  </>
    )
}
