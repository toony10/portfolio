import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../public/assets/assets'
const NavBar = () => {
    return (
        <>
            <nav className="flex fixed px-5 lg:px8 xl:px-[8%] py-4 items-center justify-between w-full z-50">
                <Link href="/">
                    <Image src={ assets.logo } alt="logo" className="w-28 m-6" />
                </Link>
                <ul>
                    <li><Link href="#top">Home</Link></li>
                    <li><Link href="#about">About Me</Link></li>
                    <li><Link href="#services">Services</Link></li>
                    <li><Link href="#work">My Work</Link></li>
                    <li><Link href="#contact">Contact me</Link></li>
                </ul>
                <div>
                    <Link href="#contact">Contact <Image src={ assets.arrow_icon } className='w-3' alt='Contact' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
