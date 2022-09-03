import React from "react";
import api from "../../api";
import { useState, useEffect } from "react";
import { LoadingSvg, ProductItem } from "../../components";
function ProductsMapItem() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    const products = await api.get.products();
    setData(products.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingSvg />
      </div>
    );
  }
  return (
    <div className="products-list-container">
      {data.properties.map((item) => {
        return (
          <ProductItem
            slug={item.id}
            description={item.title}
            image={"http://eflare.ir" + item.images[0].path_thumbnail}
            propertyCode={item.property_code}
            price={item.price}
            propertyState={item.city.province.name}
            propertyCity={item.city.name}
            foundation={item.size_of_building}
            landSize={item.size_of_land}
            locationType={item.city.province.name}
            key={item.id}
            bedNumber={item.number_of_rooms}
            constructionYear={item.year_of_construction}
            propertyType={item.owner_name}
          />
        );
      })}
    </div>
  );
}

export default ProductsMapItem;
