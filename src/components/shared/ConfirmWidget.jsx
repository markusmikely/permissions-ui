import React from "react";

const ConfirmForm = ({confirmText}) => {

    const handleConfirm = () => {}
    const handleCancel = () => {}
    
    return <div className="confirm">
        <div className="confirm-body">
            <p>Are you sure you want to {confirmText}</p>
        </div>
        <div className="confirm-actions">
            <button onClick={handleConfirm} className="button confirm">Confirm</button>
            <button onClick={handleCancel} className="button cancel">Cancel</button>
        </div>    
    </div>
}

export default ConfirmForm