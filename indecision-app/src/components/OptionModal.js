import React from 'react';
import Modal from 'react-modal';

const OptionalModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected option"
            onRequestClose={props.handleClearSelectedOption}
            ariaHideApp={false}
        >
            <h3>Selected option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );
};

export default OptionalModal;