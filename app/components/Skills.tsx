import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionHeader from './custom/SectionHeader';
import { assets } from '@/assets/assets';
import { FaCode, FaReact, FaPalette, FaTools, FaCloud, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiFiles } from "react-icons/gi";

const skillCategories = [
    {
        title: 'Languages',
        color: 'bg-pink-500/90',
        icon: FaCode,
        skills: [
            { name: 'HTML', icon: assets.html },
            { name: 'CSS', icon: assets.css },
            { name: 'JavaScript', icon: assets.javascript },
            { name: 'TypeScript', icon: assets.typescript },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        color: 'bg-blue-500/90',
        icon: FaReact,
        skills: [
            { name: 'React', icon: assets.react },
            { name: 'Next.js', icon: assets.next },
            { name: 'Shadcn UI', icon: assets.shadcn },
        ],
    },
    {
        title: 'State Management',
        color: 'bg-green-500/90',
        icon: GiFiles,
        skills: [
            { name: 'Zustand', icon: assets.zustand },
        ],
    },
    {
        title: 'Styling',
        color: 'bg-yellow-500/90',
        icon: FaPalette,
        skills: [
            { name: 'Tailwind CSS', icon: assets.tailwind },
            { name: 'Bootstrap', icon: assets.bootstrap },
        ],
    },
    {
        title: 'Tools',
        color: 'bg-purple-500/90',
        icon: FaTools,
        skills: [
            { name: 'Git', icon: assets.git },
            { name: 'Postman', icon: assets.postMan },
            { name: 'VS Code', icon: assets.vscode },
        ],
    },
    {
        title: 'Backend / Cloud',
        color: 'bg-cyan-500/90',
        icon: FaCloud,
        skills: [
            { name: 'Supabase', icon: assets.supabase },
        ],
    },
];

const SCROLL_AMOUNT = 320;

const Skills = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
        }
    };

    return (
        <motion.section
            id="skills"
            initial={ { opacity: 0 } }
            whileInView={ { opacity: 1 } }
            transition={ { duration: 1 } }
            className="w-full px-[4vw] py-10 scroll-mt-20"
        >
            <SectionHeader
                sm="My Abilities"
                lg="Skills"
                p="A collection of technologies, languages, and tools I use to build modern web applications."
            />
            <div className="relative">
                {/* Connecting line */ }
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 z-0" style={ { zIndex: 0 } } />
                {/* Arrow buttons for large screens */ }
                <button
                    type="button"
                    aria-label="Scroll left"
                    onClick={ scrollLeft }
                    className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-darkTheme/80 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    <FaChevronLeft className="text-2xl text-gray-700 dark:text-white" />
                </button>
                <button
                    type="button"
                    aria-label="Scroll right"
                    onClick={ scrollRight }
                    className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-darkTheme/80 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    <FaChevronRight className="text-2xl text-gray-700 dark:text-white" />
                </button>
                <div
                    ref={ scrollRef }
                    className="flex gap-8 overflow-x-auto overflow-y-hidden pb-6 pt-2 snap-x snap-mandatory scrollbar-none"
                    style={ { WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' } }
                >
                    { skillCategories.map((category, i) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={ category.title }
                                onMouseEnter={ () => setHovered(i) }
                                onMouseLeave={ () => setHovered(null) }
                                initial={ { opacity: 0, y: 40 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                transition={ { duration: 0.6, delay: 0.1 * i } }
                                className={ `relative flex flex-col items-center min-w-[260px] max-w-[300px] snap-center z-10` }
                            >
                                {/* Step badge */ }
                                <motion.div
                                    className={ `rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white dark:border-darkTheme/80 ${ category.color } transition-all duration-300 ${ hovered === i ? 'scale-110 shadow-2xl' : '' }` }
                                    animate={ hovered === i ? { scale: 1.13, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' } : { scale: 1, boxShadow: '0 4px 16px rgba(0,0,0,0.10)' } }
                                >
                                    <Icon className="text-white text-3xl" />
                                </motion.div>
                                {/* Category name */ }
                                <span className="mt-3 mb-4 font-bold text-base text-gray-800 dark:text-white text-center">{ category.title }</span>
                                {/* Skills as pill badges */ }
                                <div className="flex flex-wrap justify-center gap-3">
                                    { category.skills.map((skill, idx) => (
                                        <motion.div
                                            key={ skill.name }
                                            whileHover={ { scale: 1.09, boxShadow: '0 2px 12px rgba(0,0,0,0.13)' } }
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-darkTheme/70 shadow border border-gray-200 dark:border-gray-700 transition-all cursor-pointer"
                                        >
                                            <Image src={ skill.icon } alt={ skill.name } className="w-5 h-5" />
                                            <span className="font-medium text-gray-700 dark:text-white text-xs">{ skill.name }</span>
                                        </motion.div>
                                    )) }
                                </div>
                            </motion.div>
                        );
                    }) }
                </div>
            </div>
        </motion.section>
    );
};

export default Skills; 