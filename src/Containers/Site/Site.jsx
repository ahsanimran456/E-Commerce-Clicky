import Slider from "../../Components/Slider";
import Navbar from "../../Components/Navbar";
import Categories from "../../Components/Categories";

function Site() {
    return (

        <div className="Main">
            <div className="Navbar">
                <Navbar />
                <Slider />
            </div>
            <div>
                <Categories />
            </div>
        </div>

    );
}

export default Site;