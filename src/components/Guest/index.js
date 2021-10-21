
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from 'src/hooks/useAuth';
const Guest = ({ children }) => {
  const { isAuthenticated , user } = useAuth();

  console.log('authenticadooo',user)
  if (isAuthenticated && user) {


    if(user.rol == 'superadmin'){

      return <Redirect to="/superadmin/dashboard/usuario" />;
    }
    
   
    if(user.rol == 'admin'){
      
      return <Redirect to="/admin/dashboard/usuario" />;
    
    }
    
  }

  return <>{children}</>;
};

Guest.propTypes = {
  children: PropTypes.node
};

export default Guest;
