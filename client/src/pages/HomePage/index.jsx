import { TagsElement } from "../../components"
import { Col, Container, Row } from 'styled-bootstrap-grid'
import FaneraItem from "./components/FaneraItem"
import EnterCompony from "./components/EnterCompony"
import { FaneraItemDATA } from "../../fakerData"
import "./style.scss"
export const HomePage = () => {
    return (
        <div className="homepage">
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
            <div className="entercompont">
                <Container>
                    <EnterCompony />
                </Container>
            </div>
        </div>
    )

}

