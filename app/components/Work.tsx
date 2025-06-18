import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeader from './custom/SectionHeader'
import { workData } from '@/assets/assets'
import { motion } from 'motion/react'
import { FaGithub } from "react-icons/fa"
import { MdLiveTv, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { SiNextdotjs } from "react-icons/si";
// import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Work = () => {
    const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({})

    const toggleDescription = (index: number) => {
        setExpandedDescriptions(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <SectionHeader sm='My Work' lg='Projects' />
            <motion.div
                initial={ { y: -30 } }
                whileInView={ { y: 0 } }
                transition={ { duration: 0.7 } }
                className="mt-12 flex flex-col relative max-w-3xl mx-auto gap-6"
            >
                { workData.map((project, index) => {
                    const isExpanded = expandedDescriptions[index]
                    return (
                        <div
                            key={ index }
                            className="relative flex flex-col items-center justify-between text-center border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-2xl transition duration-300 bg-white dark:bg-[#252530] dark:border-gray-700"
                        >
                            <Link href={ project.Live } target="_blank" rel="noopener noreferrer">
                                <Image
                                    sizes="100vh"
                                    width={ 100 }
                                    height={ 100 }
                                    src={ project.bgImage }
                                    alt={ project.title }
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </Link>

                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-[#f8f9fa] mt-4">{ project.title }</h3>

                            <div className="relative w-full mt-2">
                                <p
                                    className={ `text-gray-600 dark:text-gray-300 text-sm transition-all duration-300 ${ isExpanded ? '' : 'line-clamp-3'
                                        }` }
                                >
                                    { project.description }
                                </p>

                                { !isExpanded && project.description.length > 300 && (
                                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-[#252530] to-transparent flex justify-center items-end pointer-events-none" />
                                ) }

                                { project.description.length > 300 && (
                                    <button
                                        onClick={ () => toggleDescription(index) }
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full dark:bg-[#252530] px-3 py-1 text-sm text-gray-900 dark:text-gray-100 flex items-center gap-1 z-10 bg-transparent"
                                    >
                                        { isExpanded ? 'View Less' : 'View More' }
                                        { isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
                                    </button>
                                ) }
                            </div>

                            <div className="flex gap-4 mt-6">

                                <Link
                                    href={ project.Live }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-6 py-2 bg-gray-800 dark:bg-[#e7e7e7] text-white rounded-full shadow-md hover:bg-gray-900 hover:dark:bg-[#c5c5c5] dark:text-gray-900 transition-all flex gap-2 justify-center items-center"
                                >
                                    <MdLiveTv size={ 25 } /> View Live
                                </Link>
                                { project.code && (
                                    <Link
                                        href={ project.code }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 px-6 py-2 bg-gray-800 dark:bg-[#e7e7e7] text-white rounded-full shadow-md hover:bg-gray-900 hover:dark:bg-[#c5c5c5] dark:text-gray-900 transition-all flex gap-2 justify-center items-center"
                                    >
                                        <FaGithub size={ 25 } /> Code
                                    </Link>
                                ) }
                            </div>
                            <div className='mt-4 flex gap-4  px-2 py-1 rounded-full '>
                                { project.tech.map((Tech, techIndex) => (
                                    <span key={ techIndex } className="flex items-center justify-center text-gray-700 dark:text-[#f8f9fa] rounded-full text-sm font-medium w-9">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Image src={ Tech.img } alt='ss' className='rounded-lg' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{ Tech.title }</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </span>
                                )) }

                            </div>
                        </div>
                    )
                }) }
            </motion.div>
        </div>
    )
}

export default Work
