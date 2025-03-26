import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import { App } from './routes/app/App.tsx';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Portfolio } from './routes/portfolio/Portfolio.tsx';
import { Career } from './routes/career/Career.tsx';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={(<App />)} />
        <Route path='/portfolio' element={(<Portfolio />)} />
        <Route path='/career' element={(<Career />)} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
