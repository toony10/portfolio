import React from 'react'
import { motion } from 'motion/react';
interface SectionHeaderProps {
    sm: string;
    lg: string;
    p?: string;
}

const SectionHeader = ({ sm, lg, p }: SectionHeaderProps) => {
    return (
        <>
            <motion.h4 className='text-center text-lg m-2 text-gray-700 dark:text-white/80'
                initial={ { y: -20, opacity: 0 } }
                whileInView={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.5, delay: 0.3 } }
            >{ sm }</motion.h4>
            <motion.h2 className='text-center text-5xl font-roboto font-[900] tracking-wide text-gray-800 dark:text-white/95'
                initial={ { y: -20, opacity: 0 } }
                whileInView={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.5, delay: 0.5 } }
            >{ lg }</motion.h2>
            <motion.p
                initial={ { y: -20, opacity: 0 } }
                whileInView={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.7, delay: 0.3 } } className='text-center max-w-2xl mx-auto mt-5 mb-12 font-roboto text-gray-900 tracking-widest dark:text-white/90'>{ p }</motion.p>
        </>
    )
}

export default SectionHeader
