import AppRouter from './router/AppRouter';
import theme from './components/globalStyles/theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function App() {
  const [user,setUser]= useState(JSON.parse(sessionStorage.getItem('user')) || "");

  return (
    <ThemeProvider theme={theme}>
      <AppRouter user={user} setUser={setUser} />
    </ThemeProvider>
  );
}

export default App;
