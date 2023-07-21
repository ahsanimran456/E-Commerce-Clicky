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
import Slider from "react-slick";

function Categories() {

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

    };
    return (
        <div className="container">
            <div className="cat-header">
                <h3>
                    TOP CATEGORY
                </h3>


            </div>
            <div className="row mb-4">
                {imgdata && imgdata.map((items, index) => {
                    return (
                        <div className="col-md-2 col-sm-3 mt-4">
                            <img className="img-fluid" src={items.imgurl} alt={items.description} />
                            <div className="text-center mt-2"><b>{items.description}</b></div>
                        </div>
                    )
                })}
            </div>
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
            <div className="bestseller">
                <div className="cat-header">
                    <h3>
                        BESTSELLERS
                    </h3>
                </div>
                <div>
                    <Slider {...settings}>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider1.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider2.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider3.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider4.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider5.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider6.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider7.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider8.jpg")} alt="" />
                        </div>
                        <div className="">
                            <img className="img-fluid" src={require("../Assests/slider9.jpg")} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Categories;
