const Modal = ({isOpen, setIsOpen, children}) => {

    if(!isOpen) return null

    return (
        <div className="modal">
            <a onCick={setIsOpen(false)}>Close X</a>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}
export default Modal