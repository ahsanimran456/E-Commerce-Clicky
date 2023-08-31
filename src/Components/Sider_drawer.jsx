import { Drawer } from "antd";
import { MainaddproductContext } from "../Context/AddProducts";
import { useContext, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function SideDrawer({ close, Open, selectedItems }) {
    const { addproduct } = useContext(MainaddproductContext);
    const [Quantity, setQuantity] = useState(1);
    const [Price, setPrice] = useState();
    const [addtocart_products, setaddtocart_products] = useState();
    useEffect(() => {
        if (addproduct.length > 0) {
            setaddtocart_products(addproduct)
        }
    }, [addproduct]);
    const onClose = () => {
        close(false);
    };
    const handlePlus = (item) => {
        if (Quantity < 3) {
            const selected = addtocart_products.filter((item) => item.id == item.id)
            console.log(selected);
                setQuantity((prev) => prev + 1)
        }
    }
    const handleMinus = () => {
        if (Quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    return (
        <Drawer title="Shopping cart" placement="right" onClose={onClose} open={Open}>
            {Array.isArray(addtocart_products) && addtocart_products.length > 0 ? addtocart_products.map((items, index) => {
                return (
                    <div className="row align-items-center shopping-cart-slider  m-0" key={index}>
                        <div className="col-md-2 text-center p-0 ">
                            <img className="img-fluid " src={items.imgurl} alt="" />
                        </div>
                        <div className="col-md-10" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                <p className="m-0 p-0">{items.description}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3">
                                <AiOutlineMinus onClick={() => handleMinus(items)} cursor={"pointer"} />
                                <p className="p-0 m-0">{Quantity}</p>
                                <BsPlus onClick={() => handlePlus(items)} cursor={"pointer"} />
                            </div>
                            <div>
                                <p className="p-0 m-0">{items.Rates}</p>
                            </div>
                        </div>
                    </div>
                )
            }) :
                <div>
                    <p>
                        No products in the cart.
                    </p>
                </div>
            }
        </Drawer >
    );
}

export default SideDrawer;