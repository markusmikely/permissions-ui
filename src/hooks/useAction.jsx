import React from "react";
import CustomForm from "../components/forms/CustomForm";

const useAction = ({setModalContent, setOpen, formData}) => {
    const doAction = (elem, val) => {
        setOpen(false);
        switch(val) {
            case 'edit':
                setModalContent(<CustomForm formData={formData} />)
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
        doAction
    }
}

export default useAction