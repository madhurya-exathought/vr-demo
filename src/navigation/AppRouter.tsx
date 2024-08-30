import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scenes from '../components/pages/Office/ScenesControl'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vr-demo" element={<Scenes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
