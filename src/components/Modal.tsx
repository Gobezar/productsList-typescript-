import React from 'react'
import '../styles/modal.css'
import CreateProduct from './CreateProduct';

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

const Modal = ({children, onClose}: ModalProps) => {
    return (
            <>
            <div className='modal_bg'
                onClick={onClose}
            />
            <div className='modal_window'>
                {children}
            </div>

            </>



    )
}
export default Modal;
