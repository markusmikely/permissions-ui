import React from "react";

const useAction = ({setModalContent, setOpen}) => {
    const doAction = (elem, val) => {
        setOpen(false);
        console.log(elem, val)
        switch(val) {
            case 'edit':
                setModalContent(elem)
                break;
            case 'delete':
                setModalContent(elem)
                break;
            case 'create':
                setModalContent(val)
                break;
        }
        setOpen(true);
    }

    return {
        doAction
    }
}

export default useAction