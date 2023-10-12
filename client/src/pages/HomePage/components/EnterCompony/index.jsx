import { Col, Row } from "styled-bootstrap-grid"
import { Button, TagsElement } from "../../../../components"
import { Intercompony } from "../../../../assets"

const EnterCompony = () => {
    return (
        <Row>
            <Col lg="6">
                <div className="entercomponyItem_text">
                    <TagsElement tag="h2">
                        Входим в топ компаний по продажам карт
                    </TagsElement>
                    <TagsElement tag="p">
                        Деревянная карта мира способна гармонично вписаться в дизайн вашей комнаты и стать тем же недостающим элементом в создании уникального стиля. Оставьте свой номер телефона, и мы перезвоним Вам в ближайшее время
                    </TagsElement>
                    <div className="entercomponyItem_form">
                        <div>
                            <input type="text" />
                            <Button theme="simple">
                                Найти
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg="6">
                <div>
                    <img src={Intercompony} alt="png" />
                </div>
            </Col>
        </Row>
    )
}

export default EnterCompony