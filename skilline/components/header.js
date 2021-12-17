
import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className="flex xs:pt-24 pt-44 container mx-auto xs:px-8">
                <div className="lg:w-1/3">
                    <h1 className='text-secondary xs:text-3xl text-4xl font-bold leading-loose'>
                        <span className='text-primary'>Studying </span>
                        Online is now much easier
                    </h1>
                    <p className='leading-normal my-8'>Skilline is an interesting platform that will teach you in more an interactive way</p>
                    <div className='flex gap-8'>
                        <button className="xs:py-3 xs:px-6 rounded-full bg-primary text-white py-4 px-8">Join for free</button>
                        <button className="xs:hidden rounded-full py-4 px-8 flex border-2 border-primary text-primary">
                            Watch how it works</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
