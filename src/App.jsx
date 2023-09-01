import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Modal from './components/shared/Modal'
import RolesPage from './components/pages/RolesPage'
import useSanitize from './hooks/useSanitize'
import useAction from './hooks/useAction'
import useModal from './hooks/useModal'
import usePermissions from './hooks/usePermissions'
import useRoles from './hooks/useRoles'

function App() {
    const {
      open, 
      setOpen,
      modalContent,
      doAction
    } = useModal()

    const {
      permissions
    } = usePermissions()
    const {
      roles,
      functions,
      formData
  } = useRoles(permissions)



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RolesPage 
            roles={roles}
            permissions={permissions}
            functions={functions}
            formData={formData}
            doAction={doAction} />} />
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
