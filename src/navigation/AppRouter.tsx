import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScenesControl from '../components/pages/Home/ScenesControl';
import Scenes from '../components/pages/Office/ScenesControl'
import SceneABC from '../components/pages/Home/SceneABC';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scenes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
