import { Form } from 'react-bootstrap';

const Login: React.FC = () => {

  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={`border p-4 m-5 w-25 mx-auto`} onSubmit={handleLogin}>
      <h1 className='text-center m-3'>Inicio de sesión</h1>
        <div className='mt-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ejemplo@gmail.com" required={true}/>
        </div>

        <div className='mt-4'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="123456" required={true}/>
        </div>

      <div className={`text-center mt-3`}>
        <a href="/register" className='row link-primary justify-content-center mb-2'>¿No tienes una cuenta?</a>
        <button className={`btn btn-outline-success`}style={{marginTop: 10}} type="submit">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default Login;
