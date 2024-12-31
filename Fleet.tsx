import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'

const Fleet = () => {
    return (
        <div>
            <div className="text-center mt-24">
                <h1 className="text-2xl font-semibold">Choose From</h1>
                <h1 className="text-6xl font-bold">Our Premium Suite</h1>
                <section className="flex justify-center space-x-20 mt-28">
                    <div className="group bg-gray-100 w-80 h-96 rounded-xl hover:bg-red-500">
                        <Image src="/cybertruck.png" alt="Tesla Cybertruck" width='300' height='250'
                               className="item-center mt-8 ml-2"/>
                        <p className="text-2xl  font-bold mt-4 group-hover:text-white">Cybertruck</p>
                        <div className="flex justify-center mt-10">
                            <div className="mr-20">
                                <p className="text-sm font-extralight mt-4 group-hover:text-white">Starting at</p>
                                <p className="text-xl font-semibold mt-2 group-hover:text-white">$199/day</p>
                            </div>
                            <Button className="bg-red-500 text-base mt-10 ml-10 group-hover:text-red-500 group-hover:bg-white">Rent</Button>
                        </div>

                    </div>
                    <div className="group bg-gray-100 w-80 h-96 rounded-xl hover:bg-red-500">
                        <Image src="/Lamborghini-Revuelto.webp" alt="Tesla Cybertruck" width='300' height='150'
                               className="item-center mt-2 ml-2"/>
                        <p className="text-2xl  font-bold mt-4 group-hover:text-white">Lamborghini</p>
                        <div className="flex justify-center mt-10">
                            <div className="mr-20">
                                <p className="text-sm font-extralight mt-4 group-hover:text-white">Starting at</p>
                                <p className="text-xl font-semibold mt-2 group-hover:text-white">$499/day</p>
                            </div>
                            <Button className="bg-red-500 text-base mt-10 ml-10 group-hover:text-red-500 group-hover:bg-white">Rent</Button>
                        </div>
                    </div>
                    <div className="group bg-gray-100 w-80 h-96 rounded-xl hover:bg-red-500">
                        <Image src="/ferrari.avif" alt="Tesla Cybertruck" width='280' height='120'
                               className="item-center ml-2"/>
                        <p className="text-2xl  font-bold group-hover:text-white">Ferrari</p>
                        <div className="flex justify-center mt-10">
                            <div className="mr-20">
                                <p className="text-sm font-extralight mt-2 group-hover:text-white">Starting at</p>
                                <p className="text-xl font-semibold mt-2 group-hover:text-white">$349/day</p>
                            </div>
                            <Button className="bg-red-500 text-base mt-4 ml-10 group-hover:text-red-500 group-hover:bg-white">Rent</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Fleet
