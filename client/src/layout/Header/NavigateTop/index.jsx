import './style.scss'
import { Col, Container, Row } from 'styled-bootstrap-grid'
const NavigateTop = () => {
    return (
        <nav className="navigate">
            <Container>
                <div className="navigate__top">
                    <Row justifyContent="between">
                        <Col md="6">
                            <ul>
                                <li>
                                    <a href="#">
                                        Google
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Google
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Google
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Google
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="6">
                            <div className="">
                                <a href="+998 90 315 21 55">
                                    +998 90 315 21 55
                                </a>
                                <p>Натисніть, щоб скопіювати</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </nav>
    )
}

export default NavigateTop