import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Schools from './pages/schools/schools';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import School from './pages/school/school';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
})
// TODO: can add a home page
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            <Route path='/schools' element={<Schools/>}/>
            <Route path='/schools/:id' element={<School/>}/>
          </Route>
          <Route path='*' element={<Navigate to={'/schools'} replace/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);