import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface FooterProps {
    isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={ isDarkMode ? assets.logo_dark : assets.logo } alt='' className='w-36 mx-auto mb-2' />
            </div>
            <Link href='mailto:amiranton257@gmail.com' className='w-max flex items-center mx-auto gap-3'>
                <Image src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon } alt='' className='w-6' />
                <p>amiranton257@gmail.com</p>
            </Link>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Anton Amir. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><Link href='https://github.com/toony10'>GitHub</Link></li>
                    <li><Link href='http://linkedin.com/in/anton-amir'>LinkedIn</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
