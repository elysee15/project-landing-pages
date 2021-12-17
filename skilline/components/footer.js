import Image from "next/image";

export default function Footer() {

    return (
        <footer className="flex flex-col items-center py-10 justify-between bg-[#252641]">
            <div className="w-72 flex items-center">
                <div className="relative">
                    <Image src="/skilline-outline.svg" alt="Skilline" width={150} height={150} layout="intrinsic" />
                </div>
                <hr className="border-l mx-10 h-14" />
                <p className="text-gray-200 font-medium">Virtual class for zoom</p>
            </div>
            <h1 className="mt-12 mb-4 text-gray-400">Subscribe to get our Newsletter</h1>
            <div className="mb-10 flex xs:flex-col xs:gap-y-3">
                <input className="rounded-full bg-transparent border border-gray-500 px-4 mr-4 py-2 w-72 placeholder:text-sm outline-none" type="email" placeholder="Your Email" />
                <div>
                    <button className="shadow-lg shadow-[#545AE8]/50 rounded-full bg-gradient-to-r from-[#545AE8] to-[#393FCF] text-white px-4 py-2">Subscribe</button>
                </div>
            </div>
            <h4 className="text-gray-400 text-sm my-4">
                Careers |
                Privacy Policy |
                Terms & Conditions
            </h4>
            <h4 className="text-gray-400 text-sm">© 2021 Class Technologies Inc.</h4>
        </footer>
    )
}