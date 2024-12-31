import React from 'react'
import {Button} from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="text-black py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                {/* Brand Section */}
                <div className="col-span-1">
                    <h1 className="mt-2 font-extrabold text-3xl text-red-500">RentUp</h1>
                    <p className="mt-4 text-sm text-black">
                    Explore the road like never before with our premium car rental services. Luxury, economy, and
                        adventure all in one place.
                    </p>
                    <div className="flex mt-6 space-x-4">
            <span className="hover:text-red-500 transition-colors">
              <i className="fab fa-facebook-f text-xl"></i>
            </span>
                        <span className="hover:text-red-500 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </span>
                        <span className="hover:text-red-500 transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </span>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 border-b-2 border-gray-700 pb-2">Quick Links</h3>
                    <ul className="space-y-3">
                        <li className="hover:text-red-500 transition-colors">About Us</li>
                        <li className="hover:text-red-500 transition-colors">Services</li>
                        <li className="hover:text-red-500 transition-colors">Locations</li>
                        <li className="hover:text-red-500 transition-colors">Contact Us</li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 border-b-2 border-gray-700 pb-2">Policies</h3>
                    <ul className="space-y-3">
                        <li className="hover:text-red-500 transition-colors">Terms & Conditions</li>
                        <li className="hover:text-red-500 transition-colors">Privacy Policy</li>
                        <li className="hover:text-red-500 transition-colors">FAQ</li>
                        <li className="hover:text-red-500 transition-colors">Insurance Info</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 border-b-2 border-gray-700 pb-2">Stay Connected</h3>
                    <p className="text-sm text-black mb-4">
                        Get exclusive deals and updates directly to your inbox. Subscribe now!
                    </p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <Button className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-none text-black font-semibold transition-all">Subscribe</Button>
                    </form>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                <p>
                    &copy; {new Date().getFullYear()} <span className="text-red-500 font-bold">RentUp</span>. All
                    Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer
