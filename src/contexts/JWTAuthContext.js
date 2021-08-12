import { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import SuspenseLoader from 'src/components/SuspenseLoader';
import axios from 'src/utils/axios';
import {signin} from 'src/api/auth'
const initialAuthState = {
  isAuthenticated: false,
  isInitialised: false,
  socio: false,
  user: null,
  error: null
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    console.log('no es valido')
    return false;
  }

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.iat > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user
      };
    }
    case 'LOGIN': {
      const { user , error } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
        error
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
  
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve()
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (email, password) => {
    const response = await signin({email,password})

 
  let error = null
    if(Object.keys(response)[0] === 'error'){
       
      
     error =  Object.values(response)[0]
    }
    
    console.log('desde context',response)
    const { token } = response



    
   
    const user = jwtDecode(token);


setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
        error
      }
    });

    
   

    
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email, name, password) => {
    const response = await axios.post('/api/account/register', {
      email,
      name,
      password
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    });
  };

  useEffect(() => {
    const initialise = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken) {
          setSession(accessToken);

          const user = jwtDecode(accessToken);

        
            dispatch({
              type: 'INITIALISE',
              payload: {
                isAuthenticated: true,
                user
              }
            });
          
         
          
        } else {
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialised) {
    console.log('entro')
    return <SuspenseLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
