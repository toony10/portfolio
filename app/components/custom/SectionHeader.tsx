import React from 'react'

interface SectionHeaderProps {
    sm: string;
    lg: string;
}

const SectionHeader = ({ sm, lg }: SectionHeaderProps) => {
    return (
        <>
            <h4 className='text-center text-lg m-2 text-gray-700'>{ sm }</h4>
            <h2 className='text-center text-5xl font-roboto font-[900] tracking-wide text-gray-800'>{ lg }</h2>
        </>
    )
}

export default SectionHeader
