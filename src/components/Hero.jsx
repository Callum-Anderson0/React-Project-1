import React from 'react'
import Navbar from './Navbar'
import {ReactTyped} from 'react-typed'

export default function Hero(){
    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] min-h-[550px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>RANDOM TEXT</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>random text tewo</h1>
                <div className=" justify-center">
                    <p className='md:text-5xl sm:tet-4xl text-xl font-bold md:py-4'>text one, text two:</p>
                    <ReactTyped strings={["hi","bye","something new"]} loop />
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}