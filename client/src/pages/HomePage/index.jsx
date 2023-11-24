import { CategoryDATA } from "../../fakerData"
import { EnterCompony, FaneraHomePage, MagicHomePage, WiclientHomePage } from "./components"

export const HomePage = () => {
    return (
        <>
            <FaneraHomePage />
            <EnterCompony data={CategoryDATA} />
            <WiclientHomePage />
            <MagicHomePage />
        </>
    )

}

