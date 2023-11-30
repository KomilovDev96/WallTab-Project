import { Col, Container, Row } from "styled-bootstrap-grid"
import { Button, TagsElement } from "../../../../components"
import { BiSolidChevronRight } from "react-icons/bi";
import { Intercompony } from "../../../../assets"
import "./style.scss"
export const EnterCompony = ({ data }) => {

    return (
        <>
            <div className="topcompony">
                <Container>
                    <Row>
                        <Col lg={6} md={12} style={{ display: "flex" }}>
                            <div className="topcompony_text">
                                <TagsElement tag="h2">
                                    Входим в топ компаний по продажам карт
                                </TagsElement>
                                <TagsElement tag="p">
                                    Деревянная карта мира способна гармонично вписаться в дизайн вашей комнаты и стать тем же недостающим элементом в создании уникального стиля. Оставьте свой номер телефона, и мы перезвоним Вам в ближайшее время
                                </TagsElement>
                                <div className="topcompony_form">
                                    <div className="topcompony_formFlex">
                                        <input type="text" placeholder="Запишите Ваш номер телефону" />
                                        <Button theme="simple">
                                            Найти
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="topcompony_image">
                                <img src={Intercompony} alt="png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <div className="ozcategory">
                    {data.map((item, index) => (
                        <div key={index} className="ozcategory_item">
                            <div className="ozcategory_image">
                                <img src={item.image} alt="png" />
                            </div>
                            <div className="ozcategory_title">
                                <h4>{item.title} <BiSolidChevronRight /></h4>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

