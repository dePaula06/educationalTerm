//Import Hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import pages
import Init from './pages/init/init';
import Autora from './pages/autora/autora';
import Obra from './pages/obra/obra';
import Game from './pages/game/game';
import ScorePage from './pages/score/score';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/biografia" element={<Autora />} />
        <Route path="/obra" element={<Obra />} />
        <Route path="/game" element={<Game />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
