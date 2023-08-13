import { Drawer } from "antd";
import { MainaddproductContext } from "../Context/AddProducts";
import { useContext } from "react";

function SideDrawer({ close, Open, selectedItems }) {
    const { addproduct } = useContext(MainaddproductContext);
    const onClose = () => {
        close(false);
    };
    console.log('====================================');
    console.log(addproduct.length);
    console.log('====================================');
    return (
        <Drawer title="Shopping cart" placement="right" onClose={onClose} open={Open}>
            {Array.isArray(addproduct) && addproduct.length > 0 ? addproduct.map((items, index) => {
                return (
                    <div className="row justify-content-center align-center" key={index}>
                        <div className="col-md-2 mb-2" >
                            <img className="img-fluid rounded " src={items.imgurl} alt="" />
                        </div>
                        <div className="col-md-10 mb-2" style={{ display: "flex", alignItems: "center" }}>
                            <p className="m-0">{items.description}</p>
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