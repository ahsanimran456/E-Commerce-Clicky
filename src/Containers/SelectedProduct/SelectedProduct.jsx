import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ViewItem from "../../Components/ViewItem";

function SelectedView() {
    const [Item, setItem] = useState({});
    const [ReCall, setReCall] = useState(1);

    useEffect(() => {
        // Get the initial item from localStorage
        const itemJSON = localStorage.getItem("Product");
        const item = JSON.parse(itemJSON);
        setItem(item);
    }, [ReCall]);

    useEffect(() => {
        console.log(ReCall);
    }, [ReCall]);
    return (
        <>
            <Navbar />
            <ViewItem item={Item} setReCall={setReCall} ReCall={ReCall} />
        </>
    );
}

export default SelectedView;