import React from 'react'

interface SectionHeaderProps {
    sm: string;
    lg: string;
    p?: string;
}

const SectionHeader = ({ sm, lg, p }: SectionHeaderProps) => {
    return (
        <>
            <h4 className='text-center text-lg m-2 text-gray-700 dark:text-white/80'>{ sm }</h4>
            <h2 className='text-center text-5xl font-roboto font-[900] tracking-wide text-gray-800 dark:text-white/95'>{ lg }</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-roboto text-gray-900 tracking-widest dark:text-white/90'>{ p }</p>
        </>
    )
}

export default SectionHeader
