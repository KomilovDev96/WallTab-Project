import { Container, Row, Col } from 'styled-bootstrap-grid'
import { NavigateTopDATA, NavigateBottomMENUDATA } from "../../fakerData"
import "./style.scss"
import { Button } from '../../components/Button'

const Footer = () => {
    return (
        <div className="footer">
            
            <Container>
                <Row>
                    <Col md="3">
                        <div className='footer_wood'>
                            <h3 className='footer_wood_text'>"Magic Wood Map"</h3>
                            <form className='footer_wood_form'>
                                <div className='footer_wood_email'>
                                    <input className='footer_wood_email-inp' placeholder='Ваш e-mail' type="text" />
                                    <Button theme="simple">
                                        Отправить
                                    </Button>
                                </div>
                            </form>
                            <ul className='footer_wood_menu'>
                                {NavigateTopDATA.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>
                                            {item.svg}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p className='footer_wood_end'>©2022, "Magic Wood Map"</p>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className='footer_menu'>
                            <h4 className='footer_title'>Меню</h4>
                            <ul className='footer_menu_menu'>
                                {NavigateBottomMENUDATA.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className='footer_contact'>
                            <h4 className='footer_title'>Контакты</h4>
                            <ul className='footer_contact_menu'>
                                <li>
                                    <h4>Отдел продаж:</h4>
                                    <p>+38 (093) 569 44 99</p>
                                    <p>info@mapsend.ua</p>
                                </li>
                                <li>
                                    <h4>Отдел маркетинга:</h4>
                                    <p>+38 (093) 569 44 99</p>
                                    <p>info@mapsend.ua</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className='footer_page'>
                            <h4 className='footer_title'>Страницы</h4>
                            <ul className='footer_page_menu'>
                                <li>
                                    <a href="#">Оферта</a>
                                </li>
                                <li>
                                    <a href="#">Доставка</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer