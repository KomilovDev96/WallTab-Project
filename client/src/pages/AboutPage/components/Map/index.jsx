import { InterMapSVG } from "../../../../assets"
import { TagsElement } from "../../../../components"
import { Container } from "styled-bootstrap-grid"
import './style.scss'

export const Map = () => {
    return (
        <Container>
            <div className="mapSection">
                <div className="mapSection_fonts">
                    <TagsElement tag="h2">
                        Magic Wood Maps
                    </TagsElement>
                    <TagsElement tag="p">
                        Различные виды карт из натурального дерева и приложений для них, чтобы отвечать потребностям наших клиентов. Чтобы наш декор был лучшим, мы сотрудничаем с лучшими производителями сырья и красок в отрасли
                    </TagsElement>
                </div>
                <div className="mapSection_map">
                    <img src={InterMapSVG} alt="svg" />
                </div>
            </div>
        </Container>
    )
}