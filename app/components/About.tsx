import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectionHeader from './custom/SectionHeader'
import { motion } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { FaHandshake } from 'react-icons/fa';

interface AboutProps {
    isDarkMode: boolean
}

const About = ({ isDarkMode }: AboutProps) => {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            whileInView={ { opacity: 1 } }
            transition={ { duration: 1 } }
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <SectionHeader sm='Introduction' lg='About me' />
            <motion.div
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                transition={ { duration: 0.8 } }
                className='flex flex-col lg:flex-row w-full items-center gap-20 my-20 mx-auto'>
                <motion.div
                    initial={ { opacity: 0, scale: 0.9 } }
                    whileInView={ { opacity: 1, scale: 1 } }
                    transition={ { duration: 0.6 } }
                    className='w-64 sm:w-80 max-w-none'>
                    <Image src={ assets.user_image } alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    transition={ { duration: 0.6, delay: 0.3 } }
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl text-center lg:text-left'>
                        I am a Web developer specializing in JavaScript with a focus on React.js and Next.js. Expert in building responsive, high-performance applications and creating seamless user interfaces with modern state management tools. I have a strong understanding of web development technologies and frameworks, and I am passionate about learning new technologies and frameworks to improve my skills.
                    </p>
                    <motion.ul
                        initial={ { opacity: 0 } }
                        whileInView={ { opacity: 1 } }
                        transition={ { duration: 0.8, delay: 1 } }
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        { infoList.map(
                            (item, index) => (
                                <motion.li
                                    whileInView={ { opacity: 1.05 } }
                                    key={ index } className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 dark:hover:bg-black/30 dark:hover:shadow-gray-400 hover:shadow-md max-h-[17rem] overflow-hidden'>
                                    { typeof item.icon === 'string' && item.icon === 'FaHandshake' ? (
                                        <FaHandshake className='w-9 h-9 text-blue-600 dark:text-blue-300 mx-auto' />
                                    ) : (
                                        item.icon && typeof item.icon !== 'string' ? (
                                            <Image src={ isDarkMode && item.iconDark ? item.iconDark : item.icon } alt='title' className='w-9 ' />
                                        ) : null
                                    ) }
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{ item.title }</h3>
                                    { Array.isArray(item.description) ? (
                                        <ul className='list-disc pl-5 text-gray-600 text-sm dark:text-white/70 max-h-28 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
                                            { item.description.map((val, i) => (
                                                <li key={ i }>{ val }</li>
                                            )) }
                                        </ul>
                                    ) : (
                                        <p className='text-gray-600 text-sm dark:text-white/70 max-h-28 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>{ item.description }{ item.link ? <Link className='font-extrabold dark:text-white/90' href={ item.link[1] }>{ item.link[0] }</Link> : "" }</p>
                                    ) }
                                </motion.li>
                            )
                        ) }
                    </motion.ul>
                    <h4 className='my-6 text-gray-700 font-ovo font-semibold dark:text-white text-center md:text-start'>Tools I use <span className='hidden md:inline-block'>:</span></h4>
                    <ul className='flex items-center gap-4 sm:gap-6 text-center justify-center md:justify-start'>
                        { toolsData.map((tool, index) => (
                            <li key={ index } className='flex items-center justify-center sm:w-14 aspect-square cursor-pointer rounded-lg hover:-translate-y-1 duration-500'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Image src={ tool.icon } alt='' className='w-11 sm:w-9' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className='font-bold'>{ tool.name }</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        )) }
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About