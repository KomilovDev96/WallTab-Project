import { VideoPNG } from "../../../../assets"
import { Container } from 'styled-bootstrap-grid'
import "./style.scss"
export const MagicHomePage = () => {
    return (
        <div className="magic">
            <Container>
                <div className="magicHome">
                    <div className="magicHome_text">
                        <h2>Карты волшебного леса</h2>
                        <p>Главным стремлением нашей команды есть удовлетворенность клиента от сотрудничества с нашей командой.</p>
                    </div>
                    <div className="magicHome_img">
                        <img src={VideoPNG} alt="png" />
                    </div>

                </div>
            </Container>
        </div>

    )
}

