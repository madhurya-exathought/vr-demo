import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Counter from '../components/pages/Counter/Counter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contextAPI" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
