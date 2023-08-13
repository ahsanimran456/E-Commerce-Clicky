import { useContext, useState } from "react";
import blinkgif from "../Assests/Red_Blink (1).gif";
import { FiHeart } from "react-icons/fi";
import { MainaddproductContext } from "../Context/AddProducts";
import SideDrawer from "./Sider_drawer";
import { Image } from 'antd';
import { ToastContainer, toast } from "react-toastify";


function ViewItem({ item }) {
    const [selectedSize, setSelectedSize] = useState(null);
    const { handleAddProduct } = useContext(MainaddproductContext);
    const { addproduct } = useContext(MainaddproductContext);
    const [open, setOpen] = useState(false);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
    const HandleAddToCart = () => {
        if (!selectedSize) {
            toast.warning("please select size");
            return
        }
        if (addproduct.length > 0) {
            let filteredItems = addproduct.some(items => items.description == item.description);
            console.log(filteredItems, "items check");
            !filteredItems && handleAddProduct(item);
            !filteredItems && setOpen(true)
            filteredItems = false
            return
        }
        handleAddProduct(item);
        setOpen(true)


    }
    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="viewitem-main">
                    <div className="row viewitemcard">
                        <div className="col-md-6 col-sm-12 p-0">
                            <div>
                                {/* <img className="img-fluid" src={item.imgurl} alt="" /> */}
                                <Image.PreviewGroup
                                // items={[
                                //     'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                //     'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                //     'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                                // ]}
                                >
                                    <Image
                                        className="img-fluid"
                                        // width={200}
                                        src={item.imgurl}
                                    />
                                </Image.PreviewGroup>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 ">
                            <div className="viewitem-carddescription">
                                <div className="viewitem-heading">
                                    <h3 className="headingh3">
                                        {item.description}
                                    </h3>
                                </div>
                                <div className="viewitem-des">
                                    <p className="para">
                                        West Line - Women's Pink White Button Down Color Block Crop Shirt
                                    </p>
                                </div>
                                <div className="viewitem-des">
                                    <span >
                                        STYLE : WL-WDS007
                                    </span>
                                </div>
                                <div className="viewitem-des">
                                    <span>
                                        <svg data-v-21f5376e="" data-v-34cbeed1="" height="19" width="19" viewBox="0 0 19.5 19.5" class="vue-star-rating-star" step="100"><linearGradient data-v-21f5376e="" id="v942hl" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#EEBE00"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="fbqn55" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#fff" filter="url(#fbqn55)"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#d8d8d8" stroke-width="1" stroke-linejoin="round"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)"></polygon></svg>
                                    </span>
                                    <span>
                                        <svg data-v-21f5376e="" data-v-34cbeed1="" height="19" width="19" viewBox="0 0 19.5 19.5" class="vue-star-rating-star" step="100"><linearGradient data-v-21f5376e="" id="v942hl" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#EEBE00"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="fbqn55" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#fff" filter="url(#fbqn55)"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#d8d8d8" stroke-width="1" stroke-linejoin="round"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)"></polygon></svg>
                                    </span>
                                    <span>
                                        <svg data-v-21f5376e="" data-v-34cbeed1="" height="19" width="19" viewBox="0 0 19.5 19.5" class="vue-star-rating-star" step="100"><linearGradient data-v-21f5376e="" id="v942hl" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#EEBE00"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="fbqn55" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#fff" filter="url(#fbqn55)"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#d8d8d8" stroke-width="1" stroke-linejoin="round"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)"></polygon></svg>
                                    </span>
                                    <span>
                                        <svg data-v-21f5376e="" data-v-34cbeed1="" height="19" width="19" viewBox="0 0 19.5 19.5" class="vue-star-rating-star" step="100"><linearGradient data-v-21f5376e="" id="v942hl" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#EEBE00"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="fbqn55" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#fff" filter="url(#fbqn55)"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#d8d8d8" stroke-width="1" stroke-linejoin="round"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)"></polygon></svg>
                                    </span>
                                    <span>
                                        <svg data-v-21f5376e="" data-v-34cbeed1="" height="19" width="19" viewBox="0 0 19.5 19.5" class="vue-star-rating-star" step="100"><linearGradient data-v-21f5376e="" id="v942hl" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#EEBE00"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="fbqn55" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#fff" filter="url(#fbqn55)"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)" stroke="#d8d8d8" stroke-width="1" stroke-linejoin="round"></polygon> <polygon data-v-21f5376e="" points="9.681818181818182,2.409090909090909,4.227272727272727,19.5,17.863636363636363,8.59090909090909,1.5,8.59090909090909,15.136363636363635,19.5" fill="url(#v942hl)"></polygon></svg>
                                    </span>
                                </div>
                                <div className="viewitem-price">
                                    <del className="viewiteme-dleteprice">RS 5000</del>
                                    <span className="viewnitem-disprice">
                                        RS 4300
                                    </span>
                                </div>
                                <div className="viewitem-livesale">
                                    <span>
                                        Sale is Live <img src={blinkgif} alt="" />
                                    </span>
                                </div>
                                <div>
                                    <h4>
                                        SELECT SIZE
                                    </h4>
                                </div>
                                <div className="viewitem-sizes">
                                    <span
                                        className={`viewitem-size ${selectedSize === 'S' ? 'selected' : ''}`}
                                        onClick={() => handleSizeClick('S')}
                                    >
                                        S
                                    </span>
                                    <span
                                        className={`viewitem-size ${selectedSize === 'M' ? 'selected' : ''}`}
                                        onClick={() => handleSizeClick('M')}
                                    >
                                        M
                                    </span>
                                    <span
                                        className={`viewitem-size ${selectedSize === 'L' ? 'selected' : ''}`}
                                        onClick={() => handleSizeClick('L')}
                                    >
                                        L
                                    </span>
                                </div>
                                <div className="d-flex">
                                    <div className="viewitem-addtocart">
                                        <button type='submit' onClick={HandleAddToCart}>ADD TO CART</button>
                                    </div>
                                    <div className="viewitem-WishList" >
                                        <span><FiHeart className="me-2" />WishList</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open && <SideDrawer
                close={setOpen}
                Open={open}
            />}
        </>

    );
}

export default ViewItem;