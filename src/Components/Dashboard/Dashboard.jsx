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
// import InputLabel from '@mui/material/InputLabel';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';


const ITEM_HEIGHT = 40;

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState('');
  const [categoryBy, setCategoryBy] = useState('');
  const [brandBy, setBrandBy] = useState("");
  const [searchBy, setSearchBy] = useState("");


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
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl size="small" className='w-100 '>
                <Select
                  labelId="show-by-label"
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl size="small" className='w-100 '>
                <Select
                  labelId="show-by-label"
                  value={categoryBy}
                  onChange={(e) => setCategoryBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>
                BRAND BY</h4>
              <FormControl size="small" className='w-100 '>
                <Select
                  labelId="show-by-label"
                  value={brandBy}
                  onChange={(e) => setBrandBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>
                SEARCH BY</h4>
              <FormControl size="small" className='w-100 '>
                <Select
                  labelId="show-by-label"
                  value={searchBy}
                  onChange={(e) => setSearchBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>


          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className='thead-dark'>
                <tr>
                  <th>
                    UID</th>
                  <th>	PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody> <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td style={{ width: "150px" }}>
                    <div className="productBox d-flex align-item-center">
                      <div className="imgWrapper">
                        <div className="img">
                          <img className='w-100' src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female</h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className='old'>$19.00</del>
                    <span className='new text-danger'>$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="action d-flex align-item-center     justify-content: center;">
                      <Button color='secondary' className='secondary'><FaEye /></Button>
                      <Button color='success' className='success'><MdModeEdit /></Button>
                      <Button color='error' className='error'><MdDelete /></Button>
                    </div>
                  </td>
                </tr>
              </tbody>

            </table>

            <div className="tableFooter d-flex">
              <p>showing <b>12</b> of <b>60</b> results</p>
              <Pagination count={10} color="primary" className='pagination' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
