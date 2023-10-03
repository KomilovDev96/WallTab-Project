import { CgChevronRight } from "react-icons/cg";
import "./style.scss"
export const Button = ({ children, theme, icon = false, ...others }) => {
    switch (theme) {
        case "outlet":
            return (
                <button className="btn outlet" {...others}>{children} {icon && <span><CgChevronRight /></span>}</button>
            )
        case "simple":
            return (
                <button className="btn simple" {...others}>{children}</button>
            )
        default:
            return (
                <button>{children}</button>
            )
    }

}

