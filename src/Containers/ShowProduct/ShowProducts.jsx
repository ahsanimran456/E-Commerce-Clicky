import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards";

function ShowProduct() {
    const [CardsData, setCardsData] = useState();
    const params = useParams();
    const items = params.items;
    useEffect(() => {
        if (items) {
            axios.get(`https://maroon-bear-tux.cyclic.app/getproductscategories/${items}`)
                .then(response => {
                    console.log(response.data);
                    setCardsData(response.data)
                })
                .catch(err => {
                    console.log(err,);
                });
        }

    }, []);
    return (
        <Cards items={CardsData} />
    );
}

export default ShowProduct;