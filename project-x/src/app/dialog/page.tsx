// DialogComponent.js
import React from 'react';

// @ts-ignore
const DialogComponent = ({ row, onClose }) => {
    return (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <button onClick={onClose}>Close Dialog</button>
                <h2>Details for Row</h2>
                <p>{JSON.stringify(row)}</p>
            </div>
        </div>
    );
};

export default DialogComponent;
