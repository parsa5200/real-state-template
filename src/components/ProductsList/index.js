// import { axiosInstance } from "../../Utils/util.service"
// import { baseUrl } from "../../Values/constants"
import axios from 'axios'
import { TitleComponents, ProductItem } from "../../components"
// import FlatItem from "../ProductItem"
import { useState, useEffect } from "react"
import "./ProductsList.scss"
import { Link } from "react-router-dom"
const ProductsList = () => {
  const title = {
    text: "گالری املاک شاویلا",
    description: "جدیدترین آگهی‌های شما",
  }
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios.get("http://eflare.ir/api/v1/villas").then((response) => {
      setData(response.data);
      setIsLoading(false)
      console.log(response.data);
    });
  }, [])

  if (isLoading) {
    return <div>is loading</div>
  }
  return (
    <section className='Products-list'>
      <div className='container'>
        <TitleComponents title={title.text} description={title.description} />
        <div className='products-list-container'>
          {
            data.properties.map((item) => {
              return <ProductItem
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
              />
            })
          }
        </div>
        <div className="d-flex justify-content-center">
          <button className='btn-more'>
            موارد بیشتر
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductsList

// <ProductItem
//               slug={item.sulg}
//               description={item.description}
//               image={item.image}
//               propertyCode={item.propertyCode}
//               price={item.price}
//               location={item.location}
//               foundation={item.foundation}
//               landSize={item.landSize}
//               locationType={item.locationType}
//               key={index}
//             />

  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const result = await axiosInstance({ url: "http://eflare.ir/api/v1/villas", method: "get" })
  //     console.log({ result })
  //     return result
  //   }
  //   fetchAPI()
  // }, [])

  // async function fetchAPI() {
  //   const result = await axiosInstance({ url: "http://eflare.ir/api/v1/villas", method: "get" })
  //   console.log({ result })
  //   return result
  // }
  // fetchAPI()
