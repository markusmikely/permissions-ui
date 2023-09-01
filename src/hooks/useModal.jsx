import React from "react"
import CustomForm from "../components/forms/CustomForm"

const useModal = () => {    
    const [open, setOpen] = React.useState(false)
    const [modalContent, setModalContent] = React.useState(null)
    
    const doAction = (type, formData, values) => {
        setOpen(false);
        switch(type) {
            case 'edit':
                setModalContent(<CustomForm formData={formData}/>)
                break;
            case 'delete':
                setModalContent(<CustomForm formData={formData}/>)
                break;
            case 'create':
                setModalContent(<CustomForm formData={formData}/>)
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