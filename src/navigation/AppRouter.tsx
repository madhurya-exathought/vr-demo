import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home } from '../components/pages/Home/Home';
import {Scenes} from '../components/pages/Home/Scene2'
import { SceneInWorks } from '../components/pages/Home/SceneInWorks';
import ScenesControl from '../components/pages/Home/ScenesControl';
import { SceneDescription } from '../components/pages/Home/SceneDescription';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScenesControl />} />
  {/*       <Route path="/" element={<Scenes />} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
