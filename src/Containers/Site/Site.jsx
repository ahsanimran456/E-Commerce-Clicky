import Navbar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Banner from "../../Components/Banner";
import DealZone from "../../Components/Dealzone";
import TopBrands from "../../Components/TopBrands";
import Toptrending from "../../Components/Toptrending";

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
                <DealZone />
            </div>
            <div>
                <TopBrands />
            </div>
            <div>
                <Toptrending />
            </div>
        </div>

    );
}

export default Site;