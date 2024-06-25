import React, { useState } from 'react'
import Login from './views/Login'
import Register from './views/Register'

function App_2() {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

  return (
    <div>
        {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
        }
    </div>
  )
}

export default App_2
