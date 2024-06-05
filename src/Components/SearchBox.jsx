import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchBox() {
    return (
        <div className='searchbox position-relative d-flex align-items-center'>
            <IoSearchSharp />
            <input type="text" placeholder='quick finding....' />
        </div>
    )
}

export default SearchBox