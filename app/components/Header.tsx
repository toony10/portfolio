import Image from 'next/image'
import { assets } from '../../public/assets/assets'
import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={ assets.profile_img } alt='' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Hi! I&apos;m Anton Amir <Image src={ assets.hand_icon } alt='' className='w-6 rotate-y-180' />
            </h3>
            <h1 className='text-5xl sm:text-6xl lg:text-[66px] font-roboto font-extrabold tracking-wider text-gray-800 dark:text-white'>Front-end web developer</h1>
            <p className='max-w-2xl mx-auto'>
                JavaScript web developer specializing in React.js and Next.js, skilled in building responsive, high-performance applications with modern state management for seamless user experiences.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <Link href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-black/50'>
                    Contact me <Image src={ assets.right_arrow_white } alt='' className='w-4' />
                </Link>

                <Link href="/Anton_Amir_cv.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 transition duration-500 dark:hover:bg-black/20">
                    My resume <Image src={ assets.download_icon } alt='' className='w-4' />
                </Link>
            </div>
        </div>
    )
}

export default Header