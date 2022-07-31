// Dependences
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import App from './App';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Layout from './pages/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

// Styles
import './index.css';

// Main app
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page1" element={<Layout />}>
        <Route index element={<Page1 />} />
      </Route>
      <Route path="page2" element={<Layout />}>
        <Route index element={<Page2 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
