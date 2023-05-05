import React, { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
function Login() {
 const authContext = useContext(AuthContext);
 const login = () => {
  authContext.login();
 };

 return (
  <div
   className="d-flex vh-100 
  justify-content-center align-items-center"
  >
   <div className="bg-login">
    <form>
     <div className="form-group">
      <label htmlFor="">Kullanıcı Adı</label>
      <input className="form-control" type="text" placeholder="Kullanıcı Adı" />
     </div>
     <div className="form-group">
      <label htmlFor="">Şifre</label>
      <input className="form-control" type="password" placeholder="*******" />
     </div>
     <button
      onClick={login}
      type="button"
      className="btn btn-primary w-100 mt-2"
     >
      Giriş Yap
     </button>
    </form>
   </div>
  </div>
 );
}

export default Login;
