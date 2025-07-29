import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';

import ListChannel from './pages/ListChannel';
import ModelDocumentation from './pages/ModelDocumentation';
import ModelTraining from './pages/ModelTraining'; // ✅ Import for Model Training page

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Sidebar />
        <Box sx={{ display: 'flex', flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* Adds space equal to Header height */}
          <Routes>
            <Route path="/list-channel" element={<ListChannel />} />
            <Route path="/pages/:channelId/:modelId" element={<ModelDocumentation />} />
            <Route path="/model-training" element={<ModelTraining />} /> {/* ✅ Model Training route */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
