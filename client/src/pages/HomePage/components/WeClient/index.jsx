import WeclientHomePage from "./Wiclent"
import { Container } from 'styled-bootstrap-grid'
export const WiclientHomePage = () => {
    return (
        <Container>
            <WeclientHomePage mode="client" />
            <WeclientHomePage mode="karta" />
        </Container>
    )
}

