import React from "react";
import { Banner, ProductsList, PropertyList } from "../../components"
import ProductsContextProvider from '../../context/ProductsContextProvider'
const Home = () => {
    return (
        <>
            <Banner />
            <ProductsList />
            {/* <ProductsContextProvider>
                <PropertyList />
            </ProductsContextProvider> */}
        </>
    )
}

export default Home;