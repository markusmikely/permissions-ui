import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Modal from './components/shared/Modal'
import RolesPage from './components/pages/RolesPage'
import useSanitize from './hooks/useSanitize'
import useAction from './hooks/useAction'
import useModal from './hooks/useModal'

function App() {
    const {
      open, 
      setOpen,
      modalContent,
      setModalContent
    } = useModal()
    const { sanitize } = useSanitize()
    const { doAction } = useAction({setModalContent, setOpen})

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RolesPage doAction={doAction} />} />
        </Routes>
      </Router>
      <Modal 
          isOpen={open}
          setIsOpen={setOpen}>
          {modalContent}
      </Modal>
    </>
  )
}

export default App
