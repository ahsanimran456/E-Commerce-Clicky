import { Tabs } from "antd";
import trendingbanner from "../Assests/TopTrending.jpg"
import Trendingtabs from "./TrendingTabs";
import axios from "axios";
import { useEffect, useState } from "react";
function Toptrending() {
    const [CardsData, setCardsData] = useState();
    const items = [
        {
            key: 'womens',
            label: `Women`,
            children: <Trendingtabs data={CardsData} />,
        },
        {
            key: 'mens',
            label: `Mens`,
            children: <Trendingtabs data={CardsData} />,
        },
        {
            key: 'girls',
            label: `Girls`,
            children: <Trendingtabs data={CardsData} />,
        },
        {
            key: 'boys',
            label: `Boys`,
            children: <Trendingtabs data={CardsData} />,
        },
        {
            key: 'beauty',
            label: `Beauty`,
            children: <Trendingtabs data={CardsData} />,
        },
    ];

    useEffect(() => {
        axios.get("https://maroon-bear-tux.cyclic.app/getproductstrending/womens")
            .then(response => {
                console.log(response.data);
                setCardsData(response.data)
            })
            .catch(err => {
                console.log(err,);
            });
    }, []);
    const HandlChange = (key) => {
        console.log(key);
        axios.get(`https://maroon-bear-tux.cyclic.app/getproductstrending/${key}`)
            .then(response => {
                console.log(response.data);
                setCardsData(response.data)
            })
            .catch(err => {
                console.log(err,);
            });
    };
    return (
        <>
            <div className="w-100">
                <img className="img-fluid w-100" src={trendingbanner} alt="" />
            </div>
            <div className="container">
                <div className="trendingtabs ">
                    <Tabs defaultActiveKey="1" items={items} onChange={HandlChange} />
                </div>
            </div>
        </>
    );
}

export default Toptrending;