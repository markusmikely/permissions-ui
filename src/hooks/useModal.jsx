import React from "react"
import CustomForm from "../components/forms/CustomForm"
import ConfirmForm from "../components/shared/ConfirmWidget"

const useModal = () => {    
    const [open, setOpen] = React.useState(false)
    const [modalContent, setModalContent] = React.useState(null)
    
    const doAction = (type, formData, values) => {
        console.log('type', type)
        console.log('formData', formData)
        console.log('values', values)

        setOpen(false);
        switch(type) {
            case 'edit':
                setModalContent(<CustomForm formData={formData} />)
                break;
            case 'remove':
                setModalContent(<ConfirmForm action="delete" type={formData.type} item={values.name} />)
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