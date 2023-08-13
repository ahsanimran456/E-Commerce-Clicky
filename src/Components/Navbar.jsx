import { Input } from 'antd';
import { VscAccount } from "react-icons/vsc";
import { FiHeart, FiBell } from "react-icons/fi";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import SideDrawer from './Sider_drawer';
import { Link } from 'react-router-dom';
import { MainaddproductContext } from "../Context/AddProducts";

const { Search } = Input;

function Navbar() {
    const onSearch = (value) => console.log(value);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    }
    const { addproduct } = useContext(MainaddproductContext);

    return (
        <div className="nav-header">
            {/* <div className="container"> */}
            <div className='nav-main d-flex'>
                <div className="logo-nav">
                    <Link to={"/"}>
                        <img src={require("../Assests/logo.png")} alt="" />
                    </Link>
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
                        <li className='d-flex position-relative'>
                            <FaShoppingCart onClick={showDrawer} />
                            {addproduct.length > 0 &&
                                <div className='cart-items'>
                                    <span>
                                        {addproduct.length}
                                    </span>
                                </div>
                            }
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