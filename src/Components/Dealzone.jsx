import { dealdata } from "./Products";

function DealZone() {
    return (
        <div className="container">
            <div className="cat-header">
                <h3>
                    DEAL ZONE
                </h3>
            </div>
            <div className="daelzone">
                <div className="row">
                    {dealdata && dealdata.map((items, index) => {
                        return (
                            <div className="col-md-3 col-sm-6" key={items.id}>
                                <img className="img-fluid" src={items.imgurl} alt="deals" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default DealZone;