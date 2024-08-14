import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import logo from '../Assets/logo192.png'

export default function Analytics(){
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className ='max-w-[1240px] max-auto grid md: grid-cols-2'>
                <img src={logo} alt='/' />
                <div>
                    <h1> Sills</h1>
                    <ul>
                        <li>React</li>
                        <li>CSS</li>
                        <li>Tailwind</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>   
            </div>
        </div>
    )
}
