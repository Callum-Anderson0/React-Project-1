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
                    <p>DATA ANALYTICS AAAA</p>
                    <h1> Manadgawdfjasdfsd</h1>
                    <p>
                        lorem ipsum dolor...
                    </p>
                </div>   
            </div>
        </div>
    )
}
