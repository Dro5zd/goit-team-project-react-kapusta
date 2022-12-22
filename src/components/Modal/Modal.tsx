import React, {MouseEvent, useEffect, useState} from 'react';
import {ModalDiv, OverlayModal} from './Modal.styled';

interface IModal {
    setIsOpen: (value: boolean) => void,
    isOpen: boolean,
}

export function Modal({isOpen, setIsOpen}: IModal) {
    const [show, handleShow] = useState(false)
    const escHandler = (e: any) => {
        if (e.key === "Escape") {
            setIsOpen(false)
        }
    }

    const closeModalOnBackdrop = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            setIsOpen(false)
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", escHandler);
        return () => {
            document.removeEventListener("keydown", escHandler);
        };
    }, []);

    return <OverlayModal onClick={closeModalOnBackdrop}>
        <ModalDiv>

        </ModalDiv>
    </OverlayModal>
}