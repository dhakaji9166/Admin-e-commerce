import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const ITEM_HEIGHT = 40;


function DashboardBox(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const options = ["Last Day", "Last Week", "Last Month", "Last Year"];



    return (
        <Button className='dashboardBox' style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}>
            <div className="w-100 d-flex">
                <div className="col1">
                    <h4 className="text-white">Total Users</h4>
                    <span className='text-white'>277</span>
                </div>

                <div className="" style={{ marginLeft: 'auto' }}>
                    {
                        props.icon ?
                            <span className='icon'>
                                {props.icon ? props.icon : ""}
                            </span>
                            : ""
                    }
                </div>
            </div>

            {
                props.grow === true ?
                    <span className='chart'><TrendingUpIcon /></span>
                    :
                    <span className='chart'><TrendingDownIcon /></span>
            }

            <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className='text-white mb-0 mt-0'>Last Month</h6>
                <div className="" style={{ marginLeft: "auto" }}>

                    <Button className='toggleIocn' style={{ marginLeft: "auto" }} onClick={handleClick}><HiDotsVertical /></Button>

                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '14ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}

                    </Menu>
                </div>
            </div>
        </Button>
    )
}

export default DashboardBox
