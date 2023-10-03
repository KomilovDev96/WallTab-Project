import { NavigateBottomMENUDATA, NavigateBottomOFERDATA, NavigateBottomSVGDATA, NavigateTopDATA } from '../../../fakerData'
import './style.scss'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import { AiOutlineSearch } from "react-icons/ai";
import { LogoSVG } from '../../../assets'
const NavigateTop = () => {
    return (
        <nav className="navigate">
            <div className="navigate_top">
                <Container>
                    <Row justifyContent="between" alignItems="center">
                        <Col md="4">
                            <ul className="navigate_menuIcons">
                                {NavigateTopDATA.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>
                                            {item.svg}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md="4">
                            <div className="navigate_phone">
                                <a href="tel:+998 90 315 21 55">
                                    +998 90 315 21 55
                                </a>
                                <p>Нажмите, чтобы скопировать</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="navigate_bottom mainMenu">
                <div className='mainMenu_top'>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <div className="mainMenu_logo">
                                    <a href="#">
                                        <img src={LogoSVG} alt="svg" />
                                    </a>
                                    <form className="mainMenu_form">
                                        <div className="mainMenu_form_item">
                                            <input id='search' type="text" placeholder='Найти' />
                                            <label htmlFor="search">
                                                <AiOutlineSearch size={20} />
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                            <Col lg="6" className="mainMenu_flex">
                                <div className="mainMenu_sign">
                                    <ul>
                                        {NavigateBottomSVGDATA.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.href}>
                                                    {item.icon}
                                                    <span className="mainMenu_sign_title">{item.title}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='mainMenu_bottom'>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <ul>
                                    {NavigateBottomMENUDATA.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href}>
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col lg="6">
                                <ul>
                                    {NavigateBottomOFERDATA.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href}>
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <ul>

                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavigateTop