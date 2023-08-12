import React, { useState } from "react";
export const MainaddproductContext = React.createContext();

const AddProductProvider = ({ children }) => {
    const [addproduct, setaddproduct] = useState([]);
    const handleAddProduct = (newProduct) => {
        // setaddproduct(prevproduct => [...prevproduct, newProduct]);
        const newArray = [...addproduct]; // Create a copy of the existing array
        newArray.push(newProduct); // Add the new product to the copied array
        setaddproduct(newArray); // 
    };
    return (
        <MainaddproductContext.Provider value={{ addproduct, handleAddProduct }}>
            {children}
        </MainaddproductContext.Provider>
    );
};

export default AddProductProvider;
