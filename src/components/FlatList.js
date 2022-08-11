import { data } from "./data"
import Title from "./Title"
import FlatItem from "./FlatItem"
import { useState } from "react"

const FlatList = () => {
    const title = {
        text: "گالری املاک شاویلا",
        description: "جدیدترین آگهی‌های شما"
    }

    const [itemPaginate, setItemPaginate] = useState(6)
    const loadMore = () => {
        setItemPaginate(itemPaginate + itemPaginate)
    }
    const slice = data.cardData.slice(0, itemPaginate)

    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row ">
                    {slice.map((item, index) => {
                        return (
                            <FlatItem
                                slug={item.sulg}
                                description={item.description}
                                image={item.image}
                                propertyCode={item.propertyCode}
                                price={item.price}
                                location={item.location}
                            />
                        )
                    })}
                </div>
                <button
                    className="btn-more"
                    onClick={() => loadMore()}
                >موارد بیشتر</button>
            </div>
        </section>
    )

}

export default FlatList;