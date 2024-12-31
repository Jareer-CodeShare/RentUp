import React from 'react'
import {Button} from '@/components/ui/button'

const Cta = () => {
    return (
        <div className="mt-2">
            <div className="ml-14 bg-black rounded-2xl w-[1400] h-96 flex">
                <div>
                    <h1 className=" ml-40 text-5xl font-semibold leading-tight text-white"><br/>Reserve Your
                        Dream<br/> Car Today and Feel The <br/>Best Travel Experience</h1>
                    <Button
                        className="ml-40 mt-10 bg-red-500 text-white text-xl rounded-full hover:bg-white hover:text-red-500">Drive
                        with us</Button>
                </div>
            </div>
        </div>
    )
}
export default Cta
