import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home } from '../components/pages/Home/Home';
import {Scenes} from '../components/pages/Home/Scene2'
import { SceneInWorks } from '../components/pages/Home/SceneInWorks';
import Counter from '../components/pages/Counter/Counter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SceneInWorks />} />
        {/* <Route path="/" element={<Scenes />} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
