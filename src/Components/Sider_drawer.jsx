import { Drawer } from "antd";

function SideDrawer({ close, Open, selectedItems }) {
    const onClose = () => {
        close(false);
    };
    return (
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={Open}>
            <div className="row justify-content-center align-center">
                {selectedItems && selectedItems.map((items, index) => {
                    return (
                        <>
                            <div className="col-md-2 mb-2 ">
                                <img className="img-fluid rounded " src={items.imgurl} alt="" />
                            </div>
                            <div className="col-md-10 mb-2" style={{ display: "flex", alignItems: "center" }}>
                                <p className="m-0">{items.description}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </Drawer>
    );
}

export default SideDrawer;