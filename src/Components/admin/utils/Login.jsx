/* eslint-disable react/jsx-pascal-case */

// imports
import CTA from '../../commons/CTA'

const Login = ({ username, setUsername, password, setPassword, handleLogin }) => (
  <>
    <h1 className='text-4xl '>ADMIN LOGIN</h1>
    <span className='text-sm text-myGray mb-10'>Hint: admin - epicodebenchmark</span>
    <form className='flex flex-col border border-1 p-4 rounded'>
      <label className='self-center mb-1'>Username:</label>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='text-black p-1 mb-3 rounded border-2 border-black'
      />
      <label className='self-center mb-1'>Password:</label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='text-black p-1 rounded border-2 border-black'
      />
      <CTA
        onClick={handleLogin}
        className='cursor-pointer border border-black p-1 rounded-md text-center font-bold mt-4'
        text='Login'
      />
    </form>
  </>
)

export default Login
