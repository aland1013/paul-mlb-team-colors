import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </ThemeProvider>
  );
}

export default App;
