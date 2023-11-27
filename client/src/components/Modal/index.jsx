import { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import "./style.scss"
export const ModalCustom = ({ children, show, onClose }) => {
    const [isBrowser, setBrowser] = useState(false);
    // Когда открываем окно
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        }
        setBrowser(true)
        return () => {
            // Разрешаем скролл элемента body при закрытии модального окна
            document.body.style.overflow = '';
        };
    }, [show])

    const hadleClose = (e) => {
        e.preventDefault();
        onClose()
    }
    const modalContent = show ? (
        <div className="overlay">
            <div className="background"></div>
            <div className="modal">
                <div className="modalConntent">
                    <div className="header">
                        <button className="header_close" onClick={hadleClose}>
                            X
                        </button>
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        )

    } else {
        return null
    }
}

