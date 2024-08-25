import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/layout';
import AppRoutes from './Routes/Routes' 
import { BrowserRouter } from 'react-router-dom';

const AppRoute = () => {
  return (
    <Layout>
      {/* Your main content goes here */}
      <AppRoutes/>
    </Layout>
      );
}

function App() {
  return (
   <BrowserRouter>
    <AppRoute/>
   </BrowserRouter>
  );
}

export default App;
