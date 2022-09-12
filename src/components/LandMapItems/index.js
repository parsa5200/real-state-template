import React from "react";
import api from "../../api";
import { useState, useEffect } from "react";
import { LoadingSvg, LandItems } from "../../components";
function VillaMapItem() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  const getProducts = async () => {
    const products = await api.get.landProduct();
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
          <LandItems
            slug={item.id}
            description={item.title}
            image={"http://eflare.ir" + item.images[0].path_thumbnail}
            propertyCode={item.property_code}
            price={item.price}
            propertyState={item.city.province.name}
            propertyCity={item.city.name}
            landSize={item.size_of_land}
            locationType={item.city.province.name}
            key={item.id}
            propertyType={item.owner_name}
            PricePerMeter={item.each_meter_price}
            documents={item.document_conditions[0].name}
            landUse={item.types[0].name}
          />
        );
      })}
    </div>
  );
}

export default VillaMapItem;
