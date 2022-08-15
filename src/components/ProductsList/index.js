import { data } from "../data"
import { axiosInstance } from "../../Utils/util.service"
// const constants = require("../../Values/constants")

import { TitleComponents, ProductItem } from "../../components"
// import FlatItem from "../ProductItem"
import { useState } from "react"
import "./ProductsList.scss"
import { Link } from "react-router-dom"
const ProductsList = () => {
  const title = {
    text: "گالری املاک شاویلا",
    description: "جدیدترین آگهی‌های شما",
  }
  async function jafar() {
    const result = await axiosInstance({ url: "http://eflare.ir/api/villas", method: "get" })
    console.log({ result })
    return result
  }
  jafar()
  const [itemPaginate, setItemPaginate] = useState(9)
  const loadMore = () => {
    setItemPaginate(itemPaginate + itemPaginate)
  }
  const slice = data.cardData.slice(0, itemPaginate)

  return (
    <section className='Products-list'>
      <div className='container'>
        <TitleComponents title={title.text} description={title.description} />
        <div className='row '>
          {slice.map((item, index) => {
            return <ProductItem
              slug={item.sulg}
              description={item.description}
              image={item.image}
              propertyCode={item.propertyCode}
              price={item.price}
              location={item.location}
              foundation={item.foundation}
              landSize={item.landSize}
              locationType={item.locationType}
              key={index}
            />
          })}
        </div>
        <div className="d-flex justify-content-center">
          <button className='btn-more'>
            موارد بیشتر
          </button>
        </div>
        {/* <div className="d-flex justify-content-center">
          <button className='btn-more' onClick={() => loadMore()}>
            موارد بیشتر
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default ProductsList
