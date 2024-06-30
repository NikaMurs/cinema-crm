import getCookie from '../functions/getCookie';
import AdminLoginPage from '../pages/AdminLoginPage';

export default function AdminIsLoged({ children }) {

  function isLoged() {
    if (getCookie('authorization')) {
      return true;
    } else {
      return false;
    }

  }

  return (
    <>
      {isLoged() ? children : <AdminLoginPage />}
    </>
  );
}