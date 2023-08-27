import Navbar from "../../Components/Navbar";
import { Categories } from "../../Components/Categories";
import Banner from "../../Components/Banner";
import DealZone from "../../Components/Dealzone";
import TopBrands from "../../Components/TopBrands";
import Toptrending from "../../Components/Toptrending";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../../Components/Footer";

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
            <div>
                <Footer />
            </div>
        </div>

    );
}

export default Site;