import { TagsElement } from "../../../../components"
import { FaneraItemDATA } from "../../../../fakerData"
import { Container, Row, Col } from 'styled-bootstrap-grid'
import FaneraItem from "./FaneraItem"
import "./style.scss"

export const FaneraHomePage = () => {
    return (
        <div className="fanera">
            <Container>
                <div className="fanera_top">
                    <TagsElement tag="h2">
                        Изготовление изделий из фанеры
                    </TagsElement>
                    <TagsElement tag="p">
                        Как только вы найдете то, что ищете, мы гарантируем быстрое оформление заказа и доставки. Проверьте ваш выбор сегодня!
                    </TagsElement>
                </div>
                <Row>
                    {FaneraItemDATA.map((item, index) => (
                        <Col lg="3" key={index} >
                            <FaneraItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )

}
