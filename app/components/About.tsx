import { assets, infoList, toolsData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>About me</h2>

            <div className='flex felx-col lg:flex-row w-full items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 max-w-none'>
                    <Image src={ assets.user_image } alt='user' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl '>
                        I am a Web developer specializing in JavaScript with a focus on React.js and Next.js. Expert in building responsive, high-performance applications and creating seamless user interfaces with modern state management tools. I have a strong understanding of web development technologies and frameworks, and I am passionate about learning new technologies and frameworks to improve my skills.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        { infoList.map(
                            (item, index) => (
                                <li key={ index } className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                                    <Image src={ item.icon } alt='title' className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold text-gray-700'>{ item.title }</h3>
                                    <p className='text-gray-600 text-sm'>{ item.description }</p>
                                </li>
                            )
                        ) }
                    </ul>
                    <h4 className='my-6 text-gray-700 font-ovo font-semibold'>Tools I use : </h4>
                    <ul className='flex items-center gap-4 sm:gap-6'>
                        { toolsData.map((tool, index) => (
                            <li key={ index } className='flex items-center justify-center w-12 sm:w-14 aspect-square cursor-pointer border border-gray-400 rounded-lg hover:-translate-y-1 duration-500'>
                                <Image src={ tool } alt='' className='w-5 sm:w-7' />
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About