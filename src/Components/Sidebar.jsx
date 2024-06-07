import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { RiProductHuntFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";



function Sidebar() {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false)

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }


    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link>
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
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

                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'>
                                <RiProductHuntFill />
                            </span>
                            Products
                            <span className='arrow'>
                                <FaAngleRight />
                            </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab == 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li>
                                    <Link to='#'>Product List</Link>
                                    <Link to='#'>Product View</Link>
                                    <Link to='#'>Product Upload</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link>
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
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
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
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
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
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
                            <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
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

                <br />

                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut />Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar