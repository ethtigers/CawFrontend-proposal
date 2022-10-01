import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { MediaMetaDto } from "src/types/community-feed";
import { uuidv4 } from "src/utils/uuidv4";

export type ActionMap<M extends { [ index: string ]: any }> = {
  [ Key in keyof M ]: M[ Key ] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[ Key ];
  };
};


export type AuthUser = {
  id: string;
  username: string;
  wallet: string;
  avatar: MediaMetaDto;
}

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser | null;
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser | null;
  method: 'jwt';
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<JWTContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
}

type JWTAuthPayload = {
  [ Types.Initial ]: {
    isAuthenticated: boolean;
    user: AuthUser | null;
  };
  [ Types.Login ]: {
    user: AuthUser | null;
  };
  [ Types.Logout ]: undefined;
  [ Types.Register ]: {
    user: AuthUser | null;
  };
};

export type JWTActions = ActionMap<JWTAuthPayload>[ keyof ActionMap<JWTAuthPayload> ];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const setSession = (accessToken: string | null) => {

  if (accessToken)
    localStorage.setItem('accessToken', accessToken);
  else
    localStorage.removeItem('accessToken');
};

export const isValidToken = (accessToken: string) => {

  if (!accessToken)
    return false;

  // TODO : Check if token is expired or is valid

  return true;

};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case 'REGISTER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};


export const name_eateregg = 'draos2q';
export const avatar_eateregg = 'https://upload.wikimedia.org/wikipedia/en/c/c4/Various_Bored_Ape.jpg';

const _testUser: AuthUser = {
  id: uuidv4(),
  username: name_eateregg,
  wallet: '0x0000000000000000000000000000000000000000',
  avatar: {
    src: avatar_eateregg,
    width: 100,
    height: 100,
    id: uuidv4(),
    type: 'ntf',
    watermark: {
      porcentage: 0.5,
    }
  }
}

function AuthProvider({ children }: AuthProviderProps) {

  const [ state, dispatch ] = useReducer(JWTReducer, initialState);

  useEffect(() => {

    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        // TODO : Check session
        if (true) {
          setSession(accessToken);

          // TODO : Auth user
          const response: any = null;
          const { user = null } = response?.data || { user: _testUser };

          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: Types.Initial,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: Types.Initial,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string) => {

    // TODO : Login user
    const response: any = null;
    const { accessToken, user } = response?.data || { accessToken: '', user: _testUser };

    setSession(accessToken);
    dispatch({
      type: Types.Login,
      payload: {
        user,
      },
    });
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {

    // TODO : Register user
    const response: any = null;

    const accessToken = response.data.accessToken;
    const user = response.data.user;

    window.localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: Types.Register,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: Types.Logout });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
