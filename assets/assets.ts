import * as user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import handshake_icon from './handshake_icon.png';
import handshake_icon_dark from './handshake_icon_dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import skill_icon from './skill-icon.png';
import skill_icon_dark from './skill-icon-dark.png';
import vscode from './vscode.png';
import cursor from './cursor.png';
import supabase from './supabase.png';
import figma from './figma.png';
import git from './git.png';
import postMan from './postMan.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import download_icon_dark from './download-icon-dark.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import whatsApp from './WhatsApp.png';
import linkedIn from './LinkedIn.png';
import gitHub from './github.png';
import html from './html.png';
import css from './css.png';
import javascript from './javascript.png';
import next from './next.png';
import typescript from './typescript.png';
import tailwind from './talwind.png';
import bootstrap from './bootstrap.png';
import shadcn from './shadcn.png';
import zustand from './zustand.png';
import react from './react.png';
import google from './google.png';
import emailjs from './emailjs.png';
import mysql from './mysql.png';
import postgres from './postgres.png';
export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  handshake_icon,
  handshake_icon_dark,
  edu_icon,
  edu_icon_dark,
  skill_icon,
  skill_icon_dark,
  vscode,
  cursor,
  supabase,
  figma,
  git,
  postMan,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  download_icon_dark,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  whatsApp,
  linkedIn,
  gitHub,
  html,
  css,
  javascript,
  next,
  typescript,
  tailwind,
  bootstrap,
  shadcn,
  zustand,
  react,
  google,
  mysql,
  postgres,
};

export const workData = [
  {
    title: 'Tona E-commerce (in Progress)',
    description:
      'Tona E-commerce is a modern online fashion store designed to offer a seamless and stylish shopping experience for users interested in clothing and everything related to fashion. The platform is built using Next.js, providing server-side rendering and optimized performance, while Supabase handles authentication and database services to ensure secure and efficient data management. Tailwind CSS is used to create a responsive and visually appealing user interface, and TypeScript adds type safety and reliability to the codebase. For state management, the project utilizes Zustand, allowing for a simple yet powerful way to handle global state. Tona combines clean design with robust functionality, making it a reliable destination for users to explore and purchase the latest fashion trends online.',
    bgImage: '/work-4.PNG',
    tech: [
      {
        img: next,
        title: 'Next.js',
      },
      {
        img: typescript,
        title: 'TypeScript',
      },
      {
        img: tailwind,
        title: 'TailwindCss',
      },
      {
        img: shadcn,
        title: 'Shadcn UI',
      },
      {
        img: zustand,
        title: 'Zustand',
      },
    ],
    Live: 'https://tona-ecommerce-kappa.vercel.app/',
    code: 'https://github.com/toony10/tona-ecommerce',
  },
  {
    title: 'Travel Advisor',
    description:
      "The Travel Advisor project is a web application built with React that helps users discover nearby restaurants, cafes, and hotels. It uses Google Maps API and geolocation services to determine the user's current location and display relevant places around them on an interactive map.",
    tech: [
      {
        img: react,
        title: 'Reactjs',
      },
      {
        img: tailwind,
        title: 'TailwindCss',
      },
      {
        img: google,
        title: 'Google Maps API',
      },
    ],
    bgImage: '/work-1.PNG',
    Live: 'https://travele-advisor.vercel.app/',
    code: 'https://github.com/toony10/Travele-advisor',
  },
  {
    title: 'Hadarah',
    description:
      'website about ancient Egyptian life and Pharaonic civilization using Next.js and Tailwind CSS. Designed for easy navigation and clear information presentation as a graduation project for the Faculty of Archaeology',
    bgImage: '/work-2.PNG',
    tech: [
      {
        img: next,
        title: 'Next.js',
      },
      {
        img: typescript,
        title: 'TypeScript',
      },
      {
        img: tailwind,
        title: 'TailwindCss',
      },
      {
        img: emailjs,
        title: 'EmailJs',
      },
    ],
    Live: 'https://hadhara.vercel.app/',
    code: 'https://github.com/toony10/hadhara',
  },
  {
    title: 'Khazanty',
    description:
      'e-commerce website for a furniture store in Saudi Arabia using Next.js, Tailwind CSS and Email js for users emails',
    tech: [
      {
        img: next,
        title: 'Next.js',
      },
      {
        img: typescript,
        title: 'TypeScript',
      },
      {
        img: tailwind,
        title: 'TailwindCss',
      },
    ],
    bgImage: '/work-3.PNG',
    Live: 'https://www.khazantyksa.com/',
  },
];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Bachelor of Computing and Information Technology - ',
    link: ['The Egyptian E-Learning University (EELU)', 'https://www.eelu.edu.eg/'],
  },
  {
    icon: assets.handshake_icon,
    iconDark: assets.handshake_icon_dark,
    title: 'Personal Values & Work Ethic',
    description: [
      'Passion for continuous learning',
      'Strong problem-solving mindset',
      'Effective communication',
      'Team player and collaborator',
      'Attention to detail',
      'Adaptability and flexibility',
    ],
  },
  {
    icon: assets.skill_icon,
    iconDark: assets.skill_icon_dark,
    title: 'Skills',
    description:
      'Hardworking, Detail oriented, Effective Communication, Time Management, Problem Solving and Creativity, Continuous Learning',
  },
];

export const toolsData = [
  {
    name: 'VS Code',
    icon: assets.vscode,
  },
  {
    name: 'Cursor',
    icon: assets.cursor,
  },
  {
    name: 'Supabase',
    icon: assets.supabase,
  },
  {
    name: 'Postman',
    icon: assets.postMan,
  },
  {
    name: 'Git',
    icon: assets.git,
  },
];
