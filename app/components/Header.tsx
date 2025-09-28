import Image from 'next/image'
import { assets } from '../../assets/assets'
import React from 'react'
import { motion } from 'motion/react'

interface NavBarProps {
    isDarkMode: boolean;
}


const Header = ({ isDarkMode }: NavBarProps) => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={ { scale: 0 } }
                whileInView={ { scale: 1 } }
                transition={ { duration: 0.8, type: 'spring', stiffness: 100 } }
            >
                <Image src={ assets.profile_img } alt='' className='rounded-full w-32' />
            </motion.div>
            <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
                initial={ { y: -20, opacity: 0 } }
                whileInView={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.6, delay: 0.3 } }
            >
                Hi! I&apos;m Anton Amir <Image src={ assets.hand_icon } alt='' className='w-6' />
            </motion.h3>
            <motion.h1 className='text-5xl sm:text-6xl lg:text-[66px] font-roboto font-extrabold tracking-wider text-gray-800 dark:text-white'
                initial={ { y: -30, opacity: 0 } }
                whileInView={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.6, delay: 0.5 } }
            >Front-end web developer</motion.h1>
            <motion.p className='max-w-2xl mx-auto'
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                transition={ { duration: 0.6, delay: 0.7 } }
            >
                JavaScript web developer specializing in React.js and Next.js, skilled in building responsive, high-performance applications with modern state management for seamless user experiences.
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a href="#contact" className='px-10 py-3 border border-white dark:border-white/40 rounded-full bg-black text-white flex items-center gap-2 dark:bg-black/50'
                    initial={ { y: 30, opacity: 0 } }
                    whileInView={ { y: 0, opacity: 1 } }
                    transition={ { duration: 0.6, delay: 1 } }
                >
                    Contact me <Image src={ assets.right_arrow_white } alt='' className='w-4' />
                </motion.a>

                <motion.a href="../../assets/Anton Amir (Front-end).pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 transition duration-500 dark:hover:bg-black/30"
                    initial={ { y: 30, opacity: 0 } }
                    whileInView={ { y: 0, opacity: 1 } }
                    transition={ { duration: 0.6, delay: 1.2 } }
                >
                    My resume <Image src={ isDarkMode ? assets.download_icon_dark : assets.download_icon } alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header