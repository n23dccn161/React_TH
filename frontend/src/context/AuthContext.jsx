import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    return email && token ? { email, token } : null;
  });

  const loginUser = (token, email) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    setUser({ email, token });
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
