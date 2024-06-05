import React from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";


function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'>
                                <MdDashboard />

                            </span>
                            Dashboard
                            <span className='arrow'>
                                <FaAngleRight />
                            </span>
                        </Button>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar