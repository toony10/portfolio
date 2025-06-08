import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import skill_icon from './skill-icon.png';
import skill_icon_dark from './skill-icon-dark.png';
import vscode from './vscode.png';
import cursor from './cursor.png';
import supabase from './supabase.png';
import git from './git.png';
import postMan from './postMan.png';
import work1 from './work-1.png';
import work2 from './work-2.png';
import work3 from './work-3.png';
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
import ui_icon from './ui-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import whatsApp from './WhatsApp.png';
import linkedIn from './LinkedIn.png';
import gitHub from './github.png';
import { link } from 'fs';

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  skill_icon,
  skill_icon_dark,
  vscode,
  cursor,
  supabase,
  git,
  postMan,
  work1,
  work2,
  work3,
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
  ui_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  whatsApp,
  linkedIn,
  gitHub,
};

export const workData = [
  {
    title: 'Travel Advisor',
    description:
      "The Travel Advisor project is a web application built with React that helps users discover nearby restaurants, cafes, and hotels. It uses Google Maps API and geolocation services to determine the user's current location and display relevant places around them on an interactive map.",
    bgImage: work1,
    Live: 'https://travele-advisor.vercel.app/',
  },
  {
    title: 'Hadarah',
    description:
      'website about ancient Egyptian life and Pharaonic civilization using Next.js and Tailwind CSS. Designed for easy navigation and clear information presentation as a graduation project for the Faculty of Archaeology',
    bgImage: work2,
    Live: 'https://hadhara-mfv5.vercel.app/',
  },
  {
    title: 'Khazanty',
    description:
      'e-commerce website for a furniture store in Saudi Arabia using Next.js, Tailwind CSS and Email js for users emails',
    bgImage: work3,
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
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages & Technologies',
    description: [
      'HTML, CSS, Bootstrap, Tailwind css, ShadCN, JavaScript, React Js, Next Js, zustand, SQL',
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
