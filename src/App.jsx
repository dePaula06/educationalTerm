//Import Hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import pages
import Init from './pages/init/init';
import Autora from './pages/autora/autora';
import Obra from './pages/obra/obra';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/biografia" element={<Autora />} />
        <Route path="/obra" element={<Obra />} />
      </Routes>
    </Router>
  );
}

export default App;
