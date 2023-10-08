import "./style.scss"
import { Button, TagsElement } from "../../../components"
const SliderItem = ({ item }) => {
    return (
        <div className="sliderItem">
            <div className="sliderItem_left">
                <TagsElement tag="h1" className="sliderItem_title">
                    {item.title}
                </TagsElement>
                <TagsElement tag="p" className="sliderItem_text">
                    {item.text}
                </TagsElement>
                <Button icon={true} theme="outlet">
                    Читать ешё
                </Button>
            </div>
            <div className="sliderItem_right">
                <img src={item.image} alt="png" />
            </div>
        </div>
    )
}

export default SliderItem