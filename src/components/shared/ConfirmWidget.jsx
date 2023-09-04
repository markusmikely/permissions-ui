import React from "react";

const ConfirmForm = ({action, type, item, handleCancel, handleConfirm}) => {

    return <div className="confirm">
        <div className="confirm-body">
            <p>Are you sure you want to {action}</p>
            <p><b>{type}</b></p>
            <p className="large"><b>{item}</b></p>
        </div>
        <div className="confirm-actions">
            <button onClick={handleConfirm} className="button confirm">Confirm</button>
            <button onClick={handleCancel} className="button cancel">Cancel</button>
        </div>    
    </div>
}

export default ConfirmForm