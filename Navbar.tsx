import {Button} from '@/components/ui/button'

export default function Navbar() {
    return (
        <section>
            <div className='flex justify-between '>
                <h1 className="mt-6 ml-10 font-extrabold text-3xl text-red-500">RentUp</h1>
                <div className='flex items-center mb-2'>
                    <Button variant="link" className="text-base">Service</Button>
                    <Button variant="link" className="text-base">Cars</Button>
                    <Button variant="link" className="text-base">Pricing</Button>
                    <Button variant="link" className="text-base">About</Button>
                </div>
                <Button className="m-6 bg-red-500 text-base rounded-3xl">Sign Up</Button>
            </div>
        </section>
    );
}
