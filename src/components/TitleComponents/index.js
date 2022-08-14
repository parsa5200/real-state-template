import './TitleComponents.scss'
const TitleComponents = (props) => {
    const { title, description } = props
    return (
        <div className="row">
            <div className="mx-auto">
                <div className="title-area text-center">
                    <h2 className="title">{title}</h2>
                    <p className="title-description">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TitleComponents