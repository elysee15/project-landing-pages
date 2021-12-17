import Image from "next/image";
import React from "react";

function Navbar() {
    const menuRef = React.useRef(null)
    const hamburgerRef = React.useRef(null)

    const handleOpenMenuClick = () => {
        menuRef.current.classList.toggle('xs:top-28')
        hamburgerRef.current.classList.toggle('hamburger-active')
    }

    return (
        <nav className="flex justify-between items-center font-light text-sm container mx-auto pt-4 px-8">
            <div className="relative">
                <Image src="/logo.svg" alt="Skilline" width={100} height={100} layout="intrinsic" />
            </div>
            <div className={`relative`}>
                <div ref={hamburgerRef} onClick={handleOpenMenuClick} className="md:hidden flex flex-col gap-1.5 cursor-pointer">
                    <span className="block bg-gray-800 w-8 h-[3px] rounded-full"></span>
                    <span className="block bg-gray-800 w-8 h-[3px] rounded-full"></span>
                    <span className="block bg-gray-800 w-8 h-[3px] rounded-full"></span>
                </div>
                <ul ref={menuRef} className={`flex w-[90vw] py-10 -top-[150vh] fixed md:py-0 md:top-0 md:relative left-1/2 -translate-x-1/2 flex-col bg-white md:w-auto md:left-auto md:translate-x-0 md:bg-transparent md:flex-row items-center gap-6 transition[top] duration-700 ease-in-out`}>
                    <li className="hover:bg-gray-100 md:hover:bg-transparent md:hover:underline hover:text- cursor-pointer duration-300 ease-in-out mx-auto rounded-lg xs:text-center xs:py-3 m-0">Home</li>
                    <li className="hover:bg-gray-100 md:hover:bg-transparent md:hover:underline hover:text-purple cursor-pointer duration-300 ease-in-out mx-auto rounded-lg xs:text-center xs:py-3 m-0">Careers</li>
                    <li className="hover:bg-gray-100 md:hover:bg-transparent md:hover:underline hover:text-purple cursor-pointer duration-300 ease-in-out mx-auto rounded-lg xs:text-center xs:py-3 m-0">Blog</li>
                    <li className="hover:bg-gray-100 md:hover:bg-transparent md:hover:underline hover:text-purple cursor-pointer duration-300 ease-in-out mx-auto rounded-lg xs:text-center xs:py-3 m-0">About Us</li>
                    <li className="font-light flex items-center gap-5">
                        <div className="font-light flex items-center xs:mt-5 md:mt-0 gap-5">
                            <button className="bg-white hover:bg-orange-300 transition-[background-color] rounded-full px-7 py-3 text-gray shadow">Login</button>
                            <button className="bg-orange-400 hover:bg-orange-500 transition-[background-color] rounded-full px-7 py-3 text-white shadow">Sign Up</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
