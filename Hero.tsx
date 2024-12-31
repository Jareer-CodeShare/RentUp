import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'

const Hero = () => {
    return (
        <div className='mt-4 ml-20'>
            <div className="flex">
                <div className="mt-16">
                    <h1 className='font-extrabold text-6xl'>Rental Service, <br/>Reimagined.<br/>Pay as you go</h1>
                    <p className="ml-4 mt-10 font-light text-base tracking-wide text-gray-400">Experience the ultimate
                        freedom
                        of choice<br/> with RentUp - tailor your adventure by <br/> choosing from our premium <br/>fleet
                        of
                        vehicles.</p>
                    <Button className="mt-8 ml-4 rounded-3xl text-base bg-red-500">View Our Fleet</Button>
                </div>
                <Image src='/camaro.png' alt='A red chevrolet camaro' width="700" height="300" className="ml-52"/>
            </div>
        </div>
    )
}
export default Hero
