import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/Cards";

function ShowProduct() {
    const params = useParams();
    const items = params.items;
    useEffect(() => {
        if (items) {
            axios.post(`http://localhost:3000/postproductscategories/${items}`)
                .then(response => {
                    console.log('====================================');
                    console.log(response.data);
                    console.log('====================================');
                })
                .catch(err => {

                });
        }

    }, []);
    return (
        <Cards />
    );
}

export default ShowProduct;