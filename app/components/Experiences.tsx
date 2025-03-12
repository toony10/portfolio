import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import SectionHeader from "./custom/SectionHeader";

const experiences = [
    {
        title: "Freelance React.js Developer",
        date: "Aug 2022 - Present",
        location: "Remote",
        description:
            "Built and maintained high-performance web apps with React.js and Next.js, delivering scalable solutions aligned with client needs. Enhanced performance by optimizing load times by 30% through techniques like code splitting and lazy loading.",
    },
    {
        title: "Part-time Remote Developer",
        date: "Jul 2023 – Sept 2023",
        location: "Remote",
        description:
            "Developed a front-end interface for a movie review app using Next.js and Tailwind CSS. Improved user engagement by 15% through dynamic, interactive features and seamless API integrations.",
    },
];

const Experiences = () => {
    return (
        <section id="experiences" className="w-full px-[12%] py-16 scroll-mt-20">
            <SectionHeader sm='My Journey' lg='Experiences' />
            <div className="mt-12 flex flex-col relative max-w-3xl mx-auto">
                <div className="absolute left-5 top-0 w-1 h-full bg-gray-300 rounded"></div>
                { experiences.map((exp, index) => (
                    <div key={ index } className="relative flex items-start gap-6 mb-10">
                        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md relative z-10">
                            <FaBriefcase size={ 20 } />
                        </div>
                        <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 flex-1 bg-white">
                            <h3 className="text-2xl font-semibold text-gray-700">{ exp.title }</h3>
                            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-blue-500" /> { exp.date }
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-red-500" /> { exp.location }
                                </span>
                            </div>
                            <p className="mt-4 text-gray-600 text-sm">{ exp.description }</p>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    );
};

export default Experiences;
