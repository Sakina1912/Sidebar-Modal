import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useGlobalContext } from './Context'

function Modal() {
    const {isModalOpen,closeModal} = useGlobalContext()
    return (
        <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <h3>Modal content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    <AiOutlineClose />
                </button>
            </div> 
        </div>
    )
}

export default Modal
