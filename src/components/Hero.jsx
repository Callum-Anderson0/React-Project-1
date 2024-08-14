import React from 'react'
import Navbar from './Navbar'
import {ReactTyped} from 'react-typed'

export default function Hero(){
    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] min-h-[550px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Welcome to My Portfolio</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Callum Anderson</h1>
                <div className=" justify-center">
                    <p className='md:text-4xl sm:tet-3xl text-xl font-bold md:py-4'>Sculpting a connection with technology.</p>
                    <ReactTyped strings={["example text",
                                            "some more",
                                            "something new",
                                            "something inspirational"]} 
                        typeSpeed={90}
                        backSpeed={150}
                        loop />
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>What's in store?</button>
            </div>
        </div>
    )
}