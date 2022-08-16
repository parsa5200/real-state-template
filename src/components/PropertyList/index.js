import React, { useContext } from 'react';
import { ProductItem } from "../../components"
import { productsContext } from "../../context/ProductsContextProvider"
import './PropertyList.scss'
const PropertyList = () => {
    const Products = useContext(productsContext)
    return (
        <div className='Products-list'>
            <div className='container'>
                {
                    Products.map((product, index) => {
                        < ProductItem
                            data={product}
                            key={index}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default PropertyList;