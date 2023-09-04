import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Modal from './components/shared/Modal'
import UsersPage from './components/pages/UsersPage'
import RolesPage from './components/pages/RolesPage'
import PermissionsPage from './components/pages/PermissionsPage'

import useModal from './hooks/useModal'
import usePermissions from './hooks/usePermissions'
import useRoles from './hooks/useRoles'

function App() {

    const [data, setData] = React.useState({
      users: null,
      roles: null,
      permissions: null
    })

    const {
      open, 
      setOpen,
      modalContent,
      doAction
    } = useModal()

    const {
      permissionsFormData,
      getPermissionsFormData
    } = usePermissions({setData})

    const {
      functions,
      rolesFormData,
      getRolesFormData
  } = useRoles({data, setData})

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Users</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/permissions">Permissions</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/roles" element={<RolesPage 
            roles={data.roles}
            permissions={data.permissions}
            functions={functions}
            formData={rolesFormData}
            getFormData={getRolesFormData}
            doAction={doAction} />} />
          <Route path="/permissions" element={<PermissionsPage 
            permissions={data.permissions}
            functions={functions}
            formData={permissionsFormData}
            getFormData={getPermissionsFormData}
            doAction={doAction} 
          />} />
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
