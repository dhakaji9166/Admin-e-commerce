import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import patern from '../../assets/pattern.webp';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import googleIcon from '../../assets/google-icon.png';
import { IoMdHome } from "react-icons/io";




function SignUp() {

    const context = useContext(MyContext);

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);


    useEffect(() => {

        context.setIsHideSidebarAndHeader(true)
    }, []);

    const focusInput = (index) => {
        setInputIndex(index)
    }


    return (
        <>
            <img src={patern} alt="" className='loginPatern' />
            <div className="loginSection signUpSection">

                <div className="row">
                    <div className='col-md-8 d-flex align-items-center flex-column part1 justify-content-center'>
                        <h1>BEST UX/UI FASHION <span className='text-sky'>ECOMMERCE DASHBOARD</span> & ADMIN PANEL</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

                        <div className='w-100 mt-4'>
                            <Link to={'/'}> <Button className="btn-blue btn-lg btn-big"><IoMdHome /> Go To Home</Button></Link>
                        </div>

                    </div>
                    <div className="col-md-4 pr-0">
                        <div className="loginBox ">
                            <div className="logo text-center">
                                <img src={Logo} alt="" width='60px' />
                                <h5 className='font-weight-bold'>Login to Hotash</h5>
                            </div>

                            <div className="wrapper mt-3 card border">
                                <form action="">
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'>
                                            <MdEmail />
                                        </span>
                                        <input type="text " className='form-control' placeholder='enter your email' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} />
                                    </div>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'>
                                            <RiLockPasswordFill />
                                        </span>
                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={() => setisShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />
                                            }

                                        </span>
                                    </div>

                                    <div className='form-group'>
                                        <Button type='submit' className="btn-blue btn-lg w-100 btn-big">

                                            Sign In
                                        </Button>

                                        <div className='form-group text-center mb-0 mt-3'>
                                            <Link to={'/forgot-password'} className="link mt-3">FORGOT PASSWORD</Link>
                                            <div className='d-flex align-items-center justify-content-center  or mt-3 mb-3'>
                                                <span className='line'></span>
                                                <span className='txt'>or</span>
                                                <span className='line'></span>
                                            </div>

                                            <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
                                                <img src={googleIcon} width="25px" /> &nbsp; Sign In with Google
                                            </Button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div className='wrapper mt-3 card border footer p-3'>
                                <span className='text-center'>
                                    Don't have an account?
                                    <Link to={'/signUp'} className='link color ml-2'>Register</Link>
                                </span>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp