import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScenesControl from '../components/pages/Home/ScenesControl';
import SceneGarden from '../components/pages/Home/SceneGarden';
import SceneLivingRoom from '../components/pages/Home/SceneLivingRoom';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScenesControl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
