import { Input } from 'antd';
import { VscAccount } from "react-icons/vsc";
import { FiHeart, FiBell } from "react-icons/fi";
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import SideDrawer from './Sider_drawer';
const { Search } = Input;

function Navbar() {
    const onSearch = (value) => console.log(value);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    }
    return (
        <div className="nav-header">
            {/* <div className="container"> */}
            <div className='nav-main d-flex'>
                <div className="logo-nav">
                    <img src={require("../Assests/logo.png")} alt="" />
                </div>
                <div className="Categories-nav">
                    <ul className='d-flex nav-cate'>
                        <li>
                            Men
                        </li>
                        <li>
                            Wommen
                        </li>
                        <li>
                            Kids
                        </li>
                        <li>
                            Beauty
                        </li>
                        <li>
                            New Arrivals
                        </li>
                    </ul>
                </div>
                <div className="Search-nav">
                    <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                        style={{
                            width: "100%",
                        }}
                    />
                </div>
                <div className="icons-nav">
                    <ul className='d-flex p-0 m-0'>
                        <li>
                            <FiBell />
                        </li>
                        <li>
                            <VscAccount />
                        </li>
                        <li>
                            <FiHeart />
                        </li>
                        <li>
                            <FaShoppingCart onClick={showDrawer} />
                        </li>
                    </ul>
                </div>
            </div>
            {open && <SideDrawer
                close={setOpen}
                Open={open}
            />}
        </div>
    );
}

export default Navbar;