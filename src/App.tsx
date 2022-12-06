import { Routes, Route } from 'react-router-dom';
import { ROUTEPATH } from './constants';
import Auth from './pages/Auth';
import Todos from './pages/Todos';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTEPATH.ROOT} element={<Auth />} />
        <Route path={ROUTEPATH.TODO} element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
