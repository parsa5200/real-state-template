import { data } from '../data'
import { TitleComponents, ProductItem } from "../../components"
import { useState } from "react"
import "./ProductsList.scss"
const ProductsList = () => {
  const title = {
    text: "گالری املاک شاویلا",
    description: "جدیدترین آگهی‌های شما",
  }

  const [itemPaginate, setItemPaginate] = useState(3)

  const slice = data.cardData.slice(0, itemPaginate)

  return (
    <section className='Products-list'>
      <div className='container'>
        <TitleComponents title={title.text} description={title.description} />
        <div className='row '>
          {slice.map((item, index) => {
            return < ProductItem
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

      </div>
    </section>
  )
}

export default ProductsList




{/* <div className="d-flex justify-content-center">
          <button className='btn-more' onClick={() => loadMore()}>
            موارد بیشتر
          </button>
        </div> */}

// import { axiosInstance } from "../../Utils/util.service"

        // async function jafar() {
        //   const result = await axiosInstance({ url: "http://eflare.ir/api/v1/villas", method: "get" })
        //   console.log({ result })
        //   return result
        // }
        // jafar()