import Image from "next/image";
import React from "react";

function Navbar() {
    const menuRef = React.useRef(null)
    const hamburgerRef = React.useRef(null)

    const handleOpenMenuClick = () => {
        menuRef.current.classList.toggle('xs:top-24')
        hamburgerRef.current.classList.toggle('hamburger-active')
    }

    return (
        <nav className="flex justify-between items-center font-light text-sm container mx-auto pt-4 xs:px-8">
            <div className="relative h-20 w-28">
                <Image src="/logo.svg" alt="Skilline" width={150} height={150} layout="fill" />
            </div>
            <div className={`relative`}>
                <div ref={hamburgerRef} onClick={handleOpenMenuClick} className="xl:hidden 2xl:hidden flex flex-col gap-1.5 cursor-pointer">
                    <span className="block bg-gray-800 w-8 h-[3px] rounded-full"></span>
                    <span className="block bg-gray-800 w-8 h-[3px] rounded-full"></span>
                    <span className="block bg-gray-800 w-8 h-[3px] rounded-full"></span>
                </div>
                <ul ref={menuRef} className={`xs:flex-col mb-4 -top-96 xs:hdden xs:bg-white sm:bg-white md:bg-white xs:fixed sm:fixed xs:shadow-xl py-8 xs:left-1/2 xs:-translate-x-1/2 sm:-translate-x-1/2 rounded-lg w-[90vw] z-10 flex flex-wrap font-normal items-center transition[top] duration-200 ease-in-out`}>
                    <li className="hover:bg-gray-100 hover:text-purple duration-300 ease-in-out xs:w-[80%] mx-auto rounded-lg xs:text-center xs:py-3 m-0">Home</li>
                    <li className="hover:bg-gray-100 hover:text-purple duration-300 ease-in-out xs:w-[80%] mx-auto rounded-lg xs:text-center xs:py-3 m-0">Careers</li>
                    <li className="hover:bg-gray-100 hover:text-purple duration-300 ease-in-out xs:w-[80%] mx-auto rounded-lg xs:text-center xs:py-3 m-0">Blog</li>
                    <li className="hover:bg-gray-100 hover:text-purple duration-300 ease-in-out xs:w-[80%] mx-auto rounded-lg xs:text-center xs:py-3 m-0">About Us</li>
                    <li className="font-light flex gap-5">
                        <div className="font-light flex mt-5 gap-5">
                            <button className="bg-white rounded-full px-7 py-3 text-gray shadow">Login</button>
                            <button className="bg-primary rounded-full px-7 py-3 text-white shadow">Sign Up</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
