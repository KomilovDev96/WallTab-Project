import { TagsElement } from "../../components"
import { Col, Container, Row } from 'styled-bootstrap-grid'
import FaneraItem from "./components/FaneraItem"
import EnterCompony from "./components/EnterCompony"
import { CategoryDATA, FaneraItemDATA } from "../../fakerData"
import "./style.scss"
import WeclientHomePage from "./components/WeClient"
export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage_fanera fanera">
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
                <EnterCompony data={CategoryDATA} />
            </div>
            <div className="weclient">
                <Container>
                    <WeclientHomePage mode="client" />
                    <WeclientHomePage mode="karta" />
                </Container>
            </div>
        </div>
    )

}

