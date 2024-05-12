import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import E404Page from './pages/E404Page';
import HomePage from './pages/HomePage';
import PaySuccess from './pages/PaySuccess';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/pay/success" element={<PaySuccess />} />
        <Route path="*" element={<E404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
