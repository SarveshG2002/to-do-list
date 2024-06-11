import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signup />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
