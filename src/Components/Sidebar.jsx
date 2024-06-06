import React from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { RiProductHuntFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { NavLink ,Link } from 'react-router-dom';



function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link>
                            <Button className='w-100'>
                                <span className='icon'>
                                    <MdDashboard />

                                </span>
                                Dashboard
                                <span className='arrow'>
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>

                    </li>
                    <li>
                        <Link>
                            <Button className='w-100'>
                                <span className='icon'>
                                    <RiProductHuntFill />
                                </span>
                                Products
                                <span className='arrow'>
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <Button className='w-100'>
                                <span className='icon'>
                                    <FaCartShopping />
                                </span>
                                Carts
                                <span className='arrow'>
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <Button className='w-100'>
                                <span className='icon'>
                                    <MdMessage />
                                </span>
                                Messages
                                <span className='arrow'>
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <Button className='w-100'>
                                <span className='icon'>
                                    <IoMdNotifications />
                                </span>
                                Notifications
                                <span className='arrow'>
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <Button className='w-100'>
                                <span className='icon'>
                                    <IoSettings />
                                </span>
                                Setting
                                <span className='arrow'>
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar