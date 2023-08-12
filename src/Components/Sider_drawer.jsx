import { Drawer } from "antd";
import { MainaddproductContext } from "../Context/AddProducts";
import { useContext } from "react";

function SideDrawer({ close, Open, selectedItems }) {
    const { addproduct } = useContext(MainaddproductContext);
    const onClose = () => {
        close(false);
    };
    return (
        <Drawer title="Shopping cart" placement="right" onClose={onClose} open={Open}>
            <div className="row justify-content-center align-center">
                {console.log(addproduct)}
                {Array.isArray(addproduct) && addproduct.length > 0 ? addproduct.map((items, index) => {
                    return (
                        <>
                            <div className="col-md-2 mb-2  " key={index}>
                                <img className="img-fluid rounded " src={items.imgurl} alt="" />
                            </div>
                            <div className="col-md-10 mb-2" style={{ display: "flex", alignItems: "center" }}>
                                <p className="m-0">{items.description}</p>
                            </div>
                        </>
                    )
                }) :
                    <div>
                        <p>
                            No products in the cart.
                        </p>
                    </div>
                }
            </div>
        </Drawer>
    );
}

export default SideDrawer;