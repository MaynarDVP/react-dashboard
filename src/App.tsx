
import { Topbar } from './scenes/global/Topbar';
// import { Dashboard } from './scenes/global/Dashboard';
import { Sidebar } from './scenes/global/Sidebar';
// import { Team } from './scenes/global/Team';
// import { Invoices } from './scenes/global/Invoices';
// import { Contacts } from './scenes/global/Contacts';
// import { Bar } from './scenes/global/Bar';
// import { Form } from './scenes/global/Form';
// import { Line } from './scenes/global/Line';
// import { Pie } from './scenes/global/Pie';
// import { FAQ } from './scenes/global/FAQ';
// import { Geography } from './scenes/global/Geography';
// import { Calendar } from './scenes/global/Calendar';
import { ColorModeContext, useMode } from './ThemeContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { Route, Routes } from 'react-router-dom';


function App() {
  const [theme, colorMode] = useMode(); 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className='content'>
            <Topbar />
            <Sidebar />
            {/* <Routes> */}
              {/* <Route path="/Sidebar" element={<Sidebar />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Invoices" element={<Invoices />} />
              <Route path="/Contacts" element={<Dashboard />} />
              <Route path="/Bar" element={<Bar />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Pie" element={<FAQ />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Geography" element={<Geography />} /> */}
            {/* </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
