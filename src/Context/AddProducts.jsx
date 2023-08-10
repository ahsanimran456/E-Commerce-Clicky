import React, { useState } from "react";
export const MainaddproductContext = React.createContext();

const AddProductProvider = ({ children }) => {
    const [addproduct, setaddproduct] = useState();
    const handleAddProduct = (newProduct) => {
        // setaddproduct(prevproduct => [...prevproduct, newProduct]);
        setaddproduct(newProduct)
    };
    return (
        <MainaddproductContext.Provider value={{ addproduct, handleAddProduct }}>
            {children}
        </MainaddproductContext.Provider>
    );
};

export default AddProductProvider;
