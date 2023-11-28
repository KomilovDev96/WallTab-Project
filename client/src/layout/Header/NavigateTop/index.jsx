import { NavigateBottomMENUDATA, NavigateBottomOFERDATA, NavigateBottomSVGDATA, NavigateTopDATA } from '../../../fakerData'
import './style.scss'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

import { CiHeart } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { LogoSVG } from '../../../assets'
import { useState } from 'react';
const NavigateTop = () => {
    const [nav, setNav] = useState(false)
    console.log(nav)
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
                        <div className='mainMenu_bottom_border'>
                            <Row>
                                <Col lg="6">
                                    <ul className='mainMenu_bottom_menu'>
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
                                    <ul className='mainMenu_bottom_menu mainMenu_bottom_menu-left'>
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
                        </div>
                    </Container>
                    <ul>

                    </ul>
                </div>
            </div>
            <div className="mainMenuMobile">
                <Container>
                    <div className='mainMenuMobile_flex'>
                        <div className={nav ? "mainMenuMobile_hidden" : "mainMenuMobile_hidden_none"}>
                            <div className='mainMenuMobile_hidden_menu'>
                                <div className="mainMenuMobile_hidden_overlay">
                                    <div className='mainMenuMobile_hidden_close'>
                                        <p>Menu</p>
                                        <span onClick={() => setNav(false)}>
                                            <MdClose size={35} />
                                        </span>
                                    </div>
                                    <ul className='mainMenuMobile_hidden_menuList'>
                                        {NavigateBottomMENUDATA.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.href}>
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className='mainMenuMobile_hidden_oferta'>
                                        {NavigateBottomOFERDATA.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.href}>
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className='mainMenuMobile_hidden_media footer_wood_menu'>
                                        {NavigateTopDATA.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.href}>
                                                    {item.svg}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className='mainMenuMobile_hidden_endMenu'>©2022, Magic Wood Map</p>
                                </div>
                            </div>
                        </div>
                        <div className='mainMenuMobile_bureger'>
                            <button onClick={() => setNav(!nav)}>
                                <FaBars size={40} />
                            </button>
                        </div>
                        <div className='mainMenuMobile_logo'>
                            <div className='mainMenuMobile_logoGrid'>
                                <a href="#">
                                    <img src={LogoSVG} alt="svg" />
                                </a>
                                <p>Magic Wood Maps</p>
                            </div>
                        </div>
                        <div className='mainMenuMobile_karzin'>
                            <ul>
                                <li>
                                    <BiShoppingBag size={35} />
                                    <span>2</span>
                                </li>
                                <li>
                                    <CiHeart size={35} />
                                    <span>2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default NavigateTop