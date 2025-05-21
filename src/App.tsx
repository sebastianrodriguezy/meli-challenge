import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewStepPage from './components/ReviewStepPage';
import SimulateNextStep from './components/SimulateNextStep';

import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ReviewStepPage />} />
        <Route path="/next-step" element={<SimulateNextStep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
