import React from "react"
import SlideCard from "./SlideCard"
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderHome = () => {
 
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className = "container">
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default SliderHome
