import img1 from "../Assests/13.Womens-Pumps.gif";
import img2 from "../Assests/14.Casual-Shoes.gif";
import img3 from "../Assests/15.Trousers.gif";
import img4 from "../Assests/16.Womens-Bottoms.gif";
import img5 from "../Assests/17.Makeup.gif";
import img6 from "../Assests/18.Women's-Sleepwear.gif";
import img7 from "../Assests/1.Tops (2).gif";
import img8 from "../Assests/2.Kurta (1).gif";
import img9 from "../Assests/3.Women's_T-Shirts.gif";
import img10 from "../Assests/4.HandBags (1).gif";
import img11 from "../Assests/5.Dresses (1).gif";
import img12 from "../Assests/6.Men's-Casual-Shirts.gif";
import img13 from "../Assests/7.Mens-T-Shirts.gif";
import img14 from "../Assests/8.Gilrs-Clothing.gif";
import img15 from "../Assests/9.Boys Clothing.gif";
import img16 from "../Assests/10.Lawn (1).gif";
import img17 from "../Assests/11.Womens-Sneakers.gif";
import img18 from "../Assests/12.Sports-Shoes.gif";
import AppSlider from "./Slider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import SideDrawer from "./Sider_drawer";
import { useState, useEffect, useContext } from "react";
import { MainaddproductContext } from "../Context/AddProducts";
import { Link, useNavigate } from "react-router-dom";
const imgdata = [
    {
        id: 1,
        imgurl: img1,
        description: "Women's Pumps",
    },
    {
        id: 2,
        imgurl: img2,
        description: "Casual Shoes",
    },
    {
        id: 3,
        imgurl: img3,
        description: "Trousers",
    },
    {
        id: 4,
        imgurl: img4,
        description: "Women's Bottoms",
    },
    {
        id: 5,
        imgurl: img5,
        description: "Makeup",
    },
    {
        id: 6,
        imgurl: img6,
        description: "Women's Sleepwear",
    },
    {
        id: 7,
        imgurl: img7,
        description: "Tops",
    },
    {
        id: 8,
        imgurl: img8,
        description: "Kurta",
    },
    {
        id: 9,
        imgurl: img9,
        description: "Women's T-Shirts",
    },
    {
        id: 10,
        imgurl: img10,
        description: "Handbags",
    },
    {
        id: 11,
        imgurl: img11,
        description: "Dresses",
    },
    {
        id: 12,
        imgurl: img12,
        description: "Men's Casual Shirts",
    },
    {
        id: 13,
        imgurl: img13,
        description: "Men's T-Shirts",
    },
    {
        id: 14,
        imgurl: img14,
        description: "Girls Clothing",
    },
    {
        id: 15,
        imgurl: img15,
        description: "Boys Clothing",
    },
    {
        id: 16,
        imgurl: img16,
        description: "Lawn",
    },
    {
        id: 17,
        imgurl: img17,
        description: "Women's Sneakers",
    },
    {
        id: 18,
        imgurl: img18,
        description: "Sports Shoes",
    },
]

function Categories() {

    const navigate = useNavigate();
    // const showDrawer = (item) => {
    //     const filteredItems = SelectedItems.some(existingItem => existingItem.id === item.id)
    //     if (!filteredItems) {
    //         setOpen(true);
    //         setSelectedItems(prevSelectedItems => [...prevSelectedItems, item]);
    //     }
    // };
    // useEffect(() => {
    //     if (SelectedItems) {
    //         handleAddProduct(SelectedItems)
    //     }
    // }, [SelectedItems]);


    const HandleItem = (item) => {
        const itemJSON = JSON.stringify(item);
        localStorage.setItem("Product", itemJSON);
        navigate(`product/${item.description}/${item.id}`)
    }


    return (
        <div className="container">
            <div className="cat-header">
                <h3 className="m-0">
                    TOP CATEGORY
                </h3>
            </div>

            <div className="row mb-4">
                {imgdata && imgdata.map((items, index) => {
                    return (
                        <>
                            <div className="col-md-2 col-sm-3 p-2 " style={{ cursor: 'pointer' }} key={index} onClick={() => HandleItem(items)}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img className="img-fluid" src={items.imgurl} alt={items.description} />
                                        </div>
                                        <div className="flip-card-back d-flex justify-content-center flex-column ">
                                            <div className="text-center "><b>{items.description}</b></div>
                                            <div className="text-center "><b><p>RS 5000</p></b></div>
                                            {/* <div className="d-flex justify-content-center gap-1  text-center">
                                                <div className="text-center"><b><AiOutlineShoppingCart onClick={() => showDrawer(items)} size={20} style={{ cursor: "pointer" }} /></b></div>
                                                <div className="text-center "><b><p><GoHeart size={20} style={{ cursor: "pointer" }} /></p></b></div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div >
            <div className="exclusive-for-you">
                <div className="cat-header">
                    <h3>
                        EXCLUSIVE FOR YOU
                    </h3>
                </div>
                <div className="banners-items">
                    <div className="my-3 ">
                        <img className="img-fluid" src={require("../Assests/banner1.jpg")} alt="" />
                    </div>
                    <div className="my-3">
                        <img className="img-fluid" src={require("../Assests/banner3.jpg")} alt="" />
                    </div>
                    <div className="d-flex gap-3">
                        <div>
                            <img className="img-fluid" src={require("../Assests/banner4.jpg")} alt="" />
                        </div>
                        <div>
                            <img className="img-fluid" src={require("../Assests/banner5.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bestseller ">
                <div className="cat-header">
                    <h3>
                        BESTSELLERS
                    </h3>
                </div>
                <AppSlider navigation={true} />
            </div>
        </div >
    );
}

export { Categories, imgdata };
