import Navbar from "../../Components/Navbar";
import {Categories} from "../../Components/Categories";
import Banner from "../../Components/Banner";
import DealZone from "../../Components/Dealzone";
import TopBrands from "../../Components/TopBrands";
import Toptrending from "../../Components/Toptrending";
import { useEffect } from "react";
import axios from "axios";

function Site() {
    useEffect(() => {
        // Define the API URL
        const apiUrl = 'http://localhost:3000/getproducts';

        // Make the API call using Axios
        axios(apiUrl)
            .then(response => {
                console.log('====================================');
                console.log(response);
                console.log('====================================');
            })
            .catch(err => {

            });
    }, []);
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