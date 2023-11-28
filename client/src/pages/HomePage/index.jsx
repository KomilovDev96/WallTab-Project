import { useState } from "react";
import { ModalCustom } from "../../components"
import { CategoryDATA } from "../../fakerData"
import { EnterCompony, FaneraHomePage, MagicHomePage, WiclientHomePage } from "./components"

export const HomePage = () => {
    const [showModal, setshowModal] = useState(false);
    return (
        <>
            <FaneraHomePage />
            <EnterCompony data={CategoryDATA} />
            <WiclientHomePage />
            <MagicHomePage />
        </>
    )

}

