import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeader from './custom/SectionHeader'
import { workData } from '@/public/assets/assets'
import { motion } from 'motion/react'

const Work = () => (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <SectionHeader sm='My Work' lg='Projects' />
        <motion.div
            initial={ { y: -30 } }
            whileInView={ { y: 0 } }
            transition={ { duration: 0.7 } }
            className="mt-12 flex flex-col relative max-w-3xl mx-auto gap-6">
            { workData.map((project, index) => (
                <div key={ index } className="relative flex flex-col items-center justify-between text-center border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-2xl transition duration-300 bg-white dark:bg-[#252530] dark:border-gray-700">
                    <Link href={ project.Live } target="_blank" rel="noopener noreferrer">
                        <Image sizes='100vh' width={ 100 } height={ 100 } src={ project.bgImage } alt={ project.title } className="w-full h-64 object-cover rounded-lg" />
                    </Link>
                    <h3 className="text-2xl font-semibold text-gray-700 dark:text-[#f8f9fa] mt-4">{ project.title }</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{ project.description }</p>
                    <div className="flex gap-4 mt-4">
                        <Link
                            href={ project.Live }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-6 py-2 bg-green-500 dark:bg-[#1e8449] text-white rounded-full shadow-md hover:bg-green-700 transition-all"
                        >
                            View Live
                        </Link>
                    </div>
                </div>
            )) }
        </motion.div>
    </div>
)

export default Work
