import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import ErrorPage from './pages/errorPage';
import HomePage from './pages/homePage';
import BookDetail from './pages/bookDetail';



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/books/:asin" element={<BookDetail/>}/>
          <Route path="/404" element={<ErrorPage/>}/>
       
      </Routes>
   
    </BrowserRouter>
    
  );
 

 
}

export default App;
