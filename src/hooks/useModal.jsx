import React from "react"

const useModal = () => {    
    const [open, setOpen] = React.useState(false)
    const [modalContent, setModalContent] = React.useState(null)
   
    return {
        open,
        setOpen,
        modalContent,
        setModalContent
    }
}

export default useModal