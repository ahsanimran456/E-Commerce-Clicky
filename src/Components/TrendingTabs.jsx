import Cards from "./Cards";

function Trendingtabs({ data }) {
    return (
        <Cards items={Array.isArray(data) && data} Noheader={true} />
    );
}

export default Trendingtabs;