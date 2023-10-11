import { TagsElement } from '../../../../components'
import "./style.scss"
const FaneraItem = ({ item }) => {
    return (
        <div className={`faneraItem ${item.top}`}>
            <div className='faneraItem_image'>
                <img src={item.svg} alt="svg" />
            </div>
            <div className='faneraItem_text'>
                <TagsElement tag="h3">
                    {item.title}
                </TagsElement>
                <TagsElement tag="p">
                    {item.text}
                </TagsElement>
            </div>
        </div>
    )
}

export default FaneraItem