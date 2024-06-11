import React from 'react'
import DashboardBox from './Components/DashboardBox'
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { GiBeveledStar } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Chart } from "react-google-charts";





const ITEM_HEIGHT = 40;


function Dashboard() {

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
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256", "#48d483"]} icon={<RiAccountCircleFill />} grow={true} />
              <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartShopping />} />
              <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<FaShoppingBag />} />
              <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiBeveledStar />} />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className='text-white mb-0 mt-0'>Total Sales</h6>
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

              <h3 className='text-white font-weight-bold'>$3,787,681.00</h3>
              <p className=''>$3,578.90 in last month</p>
            </div>
          </div>
        </div>


        <div className="card shadow border-0 p-3">
          <h3 className='hd'>Best Selling Products</h3>

        </div>







      </div>
    </>
  )
}

export default Dashboard