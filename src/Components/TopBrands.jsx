import { Topbrands } from "./Products";

function TopBrands() {
    return (
        <div className="container">
            <div className="TOP-BRANDS">
                <h3>
                    TOP BRANDS
                </h3>
            </div>
            <div className="TopBrands mb-5">
                <div className="row">
                    {Topbrands && Topbrands.map((items, index) => {
                        return (
                            <div className="col-md-3 mt-5 col-sm-6" key={items.id}>
                                <img className="img-fluid" src={items.imgurl} alt="deals" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default TopBrands;