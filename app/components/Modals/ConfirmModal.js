// @flow
import React, { Component } from 'react';

const ConfirmModal = ({
    modalStyle,
    closeDialog,
    title,
    message
}) => {
    return (
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                { message }
            </div>
            <button class="modal-close is-large" onClick={closeDialog} aria-label="close"></button>
          <button onClick={closeDialog} className="button">Cancel</button>
        </div>
    );
}

export default ConfirmModal;
