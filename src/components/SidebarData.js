import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIoPaper } from "react-icons/io";
import { IoMdPeople}  from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoMdPeople/>,
        className: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus/>,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople/>,
        className: 'nav-text'
    },
]