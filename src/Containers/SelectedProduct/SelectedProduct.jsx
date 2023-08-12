import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ViewItem from "../../Components/ViewItem";

function SelectedView() {
    const { view } = useParams();
    const [Item, setItem] = useState({});


    useEffect(() => {
        const itemJSON = localStorage.getItem("Product");
        const item = JSON.parse(itemJSON);
        setItem(item)
    }, []);
    return (
        <>
            <Navbar />
            <ViewItem item={Item} />
        </>
    );
}

export default SelectedView;