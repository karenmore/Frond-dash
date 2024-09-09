import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import DashboadView from './pages/DashboadView';
import CreateCoupon from './pages/CreateCoupon'


//import CreateCoupon from './components/CreateCoupon';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<DashboadView/>} index/>
          <Route path='/createCoupon' element={<CreateCoupon/>} index/> 

        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;


