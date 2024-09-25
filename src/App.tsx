// App.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { login, logout, checkAuth } from './authSlice';
import StatusComponent from './StatusComponent';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch: AppDispatch = useDispatch();

  // Check authentication status on app load
  useEffect(() => {
    dispatch(checkAuth());  // Dispatch action to check authentication state
  }, [dispatch]);

  const handleLogin = () => {
    const token = "Actual token "
    dispatch(login(token));  // Dispatch login action
  };

  const handleLogout = () => {
    dispatch(logout());  // Dispatch logout action
  };

  return (
    <div>
      <h1>Authentication Example</h1>
      {isAuthenticated ? (
        <>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
      <StatusComponent/>
    </div>
  );
};

export default App;
