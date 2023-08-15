import { Tabs } from "antd";
import trendingbanner from "../Assests/TopTrending.jpg"
import Trendingtabs from "./TrendingTabs";
function Toptrending() {
    const items = [
        {
            key: '1',
            label: `Women`,
            children: <Trendingtabs />,
        },
        {
            key: '2',
            label: `Men`,
            children: <Trendingtabs />,
        },
        {
            key: '3',
            label: `Girls`,
            children: <Trendingtabs />,
        },
        {
            key: '4',
            label: `Boys`,
            children: <Trendingtabs />,
        },
        {
            key: '5',
            label: `Beauty`,
            children: <Trendingtabs />,
        },
    ];
    const onChange = (key) => {
        // console.log(key);
    };
    return (
        <>
            <div className="w-100">
                <img className="img-fluid" src={trendingbanner} alt="" />
            </div>
            <div className="container">
                <div className="trendingtabs ">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
            </div>
        </>
    );
}

export default Toptrending;