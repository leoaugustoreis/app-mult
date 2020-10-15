import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Menu from './components/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu>
        <Routes />
      </Menu>
    </BrowserRouter>
  );
}

export default App;