//Import Hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import pages
import Init from './pages/init/init';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
      </Routes>
    </Router>
  );
}

export default App;
