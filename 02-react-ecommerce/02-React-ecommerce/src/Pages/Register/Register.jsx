import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import logo from '@/img/logo.jpg'
import { postData } from '../../services/api'
import '@/styles/form.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }

  async function handleSubmit (e) {
    e.preventDefault()

    // Valida los datos del formulario antes de enviarlos
    if (!name || !email || !password || !role) {
      console.error('Todos los campos son obligatorios.')
      return
    }

    // Crea un objeto con los datos del formulario
    const formData = {
      name,
      email,
      password,
      role
    }

    try {
    // Llama a la función postData para enviar los datos al backend
      const response = await postData('api/users/', formData)

      // Maneja la respuesta del backend como desees
      console.log('Respuesta del backend:', response)

      // Limpia los campos del formulario después del envío exitoso
      setName('')
      setEmail('')
      setPassword('')
      setRole('')
    } catch (error) {
      console.error('Error al enviar datos al backend:', error)
    // Maneja el error de alguna manera (p. ej., muestra un mensaje de error al usuario)
    }
  }

  return (
    <Layout>
      <main className='form-register w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <img className='mb-4  align-items-center ' src={logo} alt='' width='200' height='200' />
          <h1 className='h3 mb-3 fw-normal '>Please Register</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='John'
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor='name'>Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='name@example.com'
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor='email'>Email</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='role'
              placeholder='Role'
              value={role}
              onChange={handleRoleChange}
            />
            <label htmlFor='role'>Role</label>
          </div>

          <button className='btn btn-pink w-100 py-2' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
        </form>
      </main>
    </Layout>
  )
}
export default Register
