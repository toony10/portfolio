import React, { useState } from 'react';
import SectionHeader from './custom/SectionHeader'
import Link from 'next/link'
import Image from 'next/image';
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { assets } from '@/assets';
import { motion } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Loader from './custom/Loader';

interface ContactProps {
    isDarkMode: boolean;
}
const Contact = ({ isDarkMode }: ContactProps) => {
    const [result, setResult] = useState<null | string>(null);
    const [pending, setPending] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPending(true)
        const formElement = event.currentTarget;
        const formData = new FormData(formElement);

        formData.append("access_key", "21584879-23eb-4db7-a3ab-0355964dd6ed");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Thank you for reaching out! Your message has been successfully sent. I’ll get back to you as soon as possible.");

            if (formElement) {
                formElement.reset();
            }
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setPending(false)
    };

    return (
        <motion.div
            initial={ { opacity: 0 } }
            whileInView={ { opacity: 1 } }
            transition={ { duration: 1 } }
            id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] dark:bg-none bg-cover bg-center'>
            <SectionHeader
                sm="Connect with me"
                lg="Get in touch"
                p="I'd love to hear from you! If you have any questions, comments, or feedback, feel free to reach out to me through my social media or by using the form below."
            />
            <motion.div
                initial={ { y: -20, opacity: 0 } }
                whileInView={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.6 } }
                className=" flex m-auto items-center gap-10 justify-center mb-7">
                <Link href='http://linkedin.com/in/anton-amir' target="_blank" className='max-w-2xl'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FaLinkedin size={ 50 } className='text-[#0c64c5] hover:-translate-y-1 transform duration-500' />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className='font-bold'>anton-amir</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>

                <Link href='https://wa.link/svnje1' target="_blank" className='max-w-2xl'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FaWhatsapp size={ 50 } className='text-[#4bc658] hover:-translate-y-1 transform duration-500' />
                            </TooltipTrigger>

                            <TooltipContent >
                                <p className='font-bold'>+201019020642</p>
                            </TooltipContent>

                        </Tooltip>
                    </TooltipProvider>
                </Link>

                <Link href='https://github.com/toony10' target="_blank" className='max-w-2xl'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FaGithub size={ 50 } className='text-[#1a1e22] dark:text-[#fff] hover:-translate-y-1 transform duration-500' />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className='font-bold'>toony10</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>

            </motion.div>
            <motion.form
                initial={ { opacity: 0 } }
                whileInView={ { opacity: 1 } }
                transition={ { duration: 0.5, delay: 0.9 } }
                className='max-w-2xl mx-auto' onSubmit={ onSubmit }>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <motion.input
                        initial={ { x: -50, opacity: 0 } }
                        whileInView={ { x: 0, opacity: 1 } }
                        transition={ { delay: 1.1, duration: 0.6 } }
                        name='name' type="name" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white placeholder-gray-500/90 focus:border-black focus:shadow-xl transition duration-500 dark:bg-black/30 dark:border-black/30 dark:placeholder-gray-50/60' required />
                    <motion.input
                        initial={ { x: 50, opacity: 0 } }
                        whileInView={ { x: 0, opacity: 1 } }
                        transition={ { delay: 1.2, duration: 0.6 } }
                        name='email' type="email" placeholder='Enter your E-mail' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white placeholder-gray-500/90 focus:border-black focus:shadow-xl transition duration-500 dark:bg-black/30 dark:border-black/30 dark:placeholder-gray-50/60' required />
                </div>
                <motion.textarea
                    initial={ { y: 100, opacity: 0 } }
                    whileInView={ { y: 0, opacity: 1 } }
                    transition={ { duration: 0.6, delay: 1.3 } }
                    name='message' rows={ 6 } placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md text-black bg-white placeholder-gray-500/90 mb-6 focus:border-black focus:shadow-xl transition duration-500 dark:text-white dark:bg-black/30 dark:border-black/30 dark:placeholder-gray-50/60'></motion.textarea>
                <motion.button
                    whileHover={ { scale: 1.05 } }
                    transition={ { duration: 0.3 } }
                    disabled={ pending }
                    type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:text-black dark:bg-white dark:hover:bg-gray-800/95 dark:hover:text-white cursor-pointer'>
                    { pending ? '' : 'Submit' }
                    { pending ? < Loader /> : <Image src={ isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold_dark } alt='' className='w-4'></Image> }
                </motion.button>
                {
                    result &&
                    <motion.p
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        transition={ { duration: 1 } }
                        className='text-center bg-green-400 mt-10 rounded-lg text-gray-900 text-lg p-5 relative'>
                        { result }
                        <button onClick={ () => setResult(null) } className='absolute bottom-2 right-2 bg-white font-bold p-1 rounded-lg w-20 cursor-pointer'>OK</button>
                    </motion.p>
                }
            </motion.form>
        </motion.div>
    )
}

export default Contact
