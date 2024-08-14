import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Projects(){
    return (
        <div className="py-4 max-w-[1300px] mx-auto text-center">
            <h1 className='mx-auto text-white pb-4'>
                Projects I've made:
            </h1>

            <Carousel showArrows={true} centerMode centerSlidePercentage={40}>
               <div className=" rounded-md text-black bg-white max-w-[433px] min-h-[400px] mx-auto" key="slide1" style={{ padding: 0, height: 150 }}>
                    Text 01
               </div>
               <div className=" rounded-md text-black bg-white max-w-[433px] min-h-[400px] mx-auto" key="slide1" style={{ padding: 0, height: 150 }}>
                    Text 01
               </div>
            </Carousel>
            <Carousel showArrows={true} className='md:hidden'>
               <div className=" rounded-md text-black bg-white max-w-[433px] min-h-[400px] mx-auto" key="slide1" style={{ padding: 0, height: 150 }}>
                    Text 01
               </div>
               <div className=" rounded-md text-black bg-white max-w-[433px] min-h-[400px] mx-auto" key="slide1" style={{ padding: 0, height: 150 }}>
                    Text 01
               </div>
            </Carousel>
        </div>
    )
}
