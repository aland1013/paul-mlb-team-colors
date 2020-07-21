import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TeamFrame from './components/TeamFrame';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <div display='flex'>
        <Header setSidebarOpen={setSidebarOpen} />
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
        />
        <TeamFrame selectedTeam={selectedTeam} />
      </div>
    </ThemeProvider>
  );
}

export default App;
