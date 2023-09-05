import React from "react"
import CustomForm from "../components/forms/CustomForm"
import ConfirmForm from "../components/shared/ConfirmWidget"

const useModal = () => {    
    const [open, setOpen] = React.useState(false)
    const [modalContent, setModalContent] = React.useState(null)
    
    const doAction = (type, formData, handleResponse, values) => {
        
        setOpen(false);
        switch(type) {
            case 'edit':
                setModalContent(<CustomForm formData={formData} handleResponse={handleResponse.update} close={() => setOpen(false)}/>)
                break;
            case 'remove':
                setModalContent(<ConfirmForm 
                    handleCancel={() => setOpen(false)}
                    handleConfirm={e => console.log( "delete:", formData.type, values._id)}
                    action="delete" 
                    type={formData.type} 
                    item={values.name} />)
                break;
            case 'create':
                setModalContent(<CustomForm formData={formData} handleResponse={handleResponse.create} close={() => setOpen(false)}/>)
                break;
        }
        setOpen(true);
    }

    return {
        open,
        modalContent,
        setOpen,
        doAction
    }
}

export default useModal