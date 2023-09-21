import {  Outlet, useRoutes } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = () => {
    const path = window.location.pathname

    return (
        <>
            <Header />
            {/* {path === '/' ? null : <>Banner</>} */}
            {/* {path !== '/' && <>Banner</>} */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout