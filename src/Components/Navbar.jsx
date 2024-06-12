import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import SearchBox from './SearchBox';
import { CiLight } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from '../App';


function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const context = useContext(MyContext)

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-2 d-flex align-items-center part1">
                            <Link to='/' className='logo d-flex align-items-center'>
                                <img src={logo} alt="Logo" />
                                <span>
                                    HOTASH
                                </span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className='rounded-circle' onClick={() => context.setIsTroggleSidebar(!context.isTroggleSidebar)} >

                                {
                                    context.isTroggleSidebar === false ? <MdOutlineMenuOpen /> : <MdMenu />
                                }
                            </Button>
                            <SearchBox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part2">
                            <Button className='rounded-circle'> <CiLight /> </Button>
                            <Button className='rounded-circle'> <IoCartOutline /> </Button>
                            <Button className='rounded-circle'> <IoMailOutline /> </Button>
                            <Button className='rounded-circle'> <FaBell /> </Button>





                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                    <div className="userImg">
                                        <span className='rounded-circle'>
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Lalchand</h4>
                                        <p className='mb-0'>@lalo123</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <PersonAdd />
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <Settings />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <Logout />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    );
}

export default Navbar;
