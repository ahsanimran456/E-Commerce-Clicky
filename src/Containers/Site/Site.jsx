import Navbar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Banner from "../../Components/Banner";

function Site() {
    return (

        <div className="Main">
            <div className="Navbar">
                <Navbar />
                <Banner />
            </div>
            <div>
                <Categories />
            </div>
            <div>
                <div className="cat-header">
                    <h3>
                        DEAL ZONE
                    </h3>
                </div>
            </div>
        </div>

    );
}

export default Site;