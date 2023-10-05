import Layout from '../../Components/Layout'
import logo from '@/img/logo.jpg'
import '@/styles/form.css'

const Register = () => {
  return (
    <Layout>
      <main className='form-register w-100 m-auto'>
        <form>
          <img className='mb-4  align-items-center ' src={logo} alt='' width='200' height='200' />
          <h1 className='h3 mb-3 fw-normal '>Please Register</h1>

          <div className='form-floating'>
            <input
              type='name'
              className='form-control'
              id='floatingInput'
              placeholder='John'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='floatingInput'>Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='floatingInput'>Email</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='btn btn-pink w-100 py-2' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
        </form>
      </main>
    </Layout>
  )
}
export default Register
