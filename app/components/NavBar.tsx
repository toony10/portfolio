import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../public/assets/assets'

const listItems = [
    { name: 'Home', link: '#top' },
    { name: 'About Me', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'My Work', link: '#work' },
    { name: 'Contact me', link: '#contact' }
]

const NavBar = () => {
    const [isScroll, setScroll] = useState<boolean>(false)
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    const handleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 -z-10 translate-y-[-80%]'>
                <Image src={ assets.header_bg_color } alt='' className='w-full' />
            </div>
            <nav className={ `flex fixed px-5 lg:px8 xl:px-[8%] py-4 items-center justify-between w-full z-50 transition duration-500 ${isScroll ? 'bg-white/60 backdrop-blur-lg shadow-md' : ''}` }>
                <Link href="#top">
                    <Image src={ assets.logo } alt="logo" className="w-40 m-6" />
                </Link>
                <ul className={ `hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'shadow-sm bg-white/60'} bg-opacity-50` }>
                    { listItems.map((item, index) => (
                        <li key={ index } className='font-ovo'><Link href={ item.link }>{ item.name }</Link></li>
                    )) }
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='cursor-pointer'>
                        <Image src={ assets.moon_icon } alt='' className='w-7' />
                    </button>
                    <Link href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-2.5 rounded-full border border-gray-500 ml-4'>Contact <Image src={ assets.arrow_icon } className='w-3' alt='Contact' /></Link>
                    <button onClick={ handleMenu } className='block md:hidden ml-3 cursor-pointer'>
                        <Image src={ assets.menu_black } alt='' className='w-6' />
                    </button>
                </div>

                {/* mobile menu */ }
                <ul className={ `flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 h-screen w-64 z-50 bg-gray-100 shadow-md transition-transform duration-[450ms] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}` }>
                    <button className='absolute top-6 right-6' onClick={ handleMenu }>
                        <Image src={ assets.close_black } alt='' className='w-5 cursor-pointer' />
                    </button>
                    { listItems.map((item, index) => (
                        <li key={ index } className='font-ovo' onClick={ handleMenu }>
                            <Link href={ item.link }>{ item.name }</Link>
                        </li>
                    )) }
                </ul>
            </nav>
        </>
    )
}

export default NavBar
