import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Form2 from './components/Form2'; // Form2 コンポーネントをインポート
import Success from './components/Success';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Home onLogin={handleLogin} />} /> {/* onLogin を渡す */}
        <Route path="/form" element={isAuthenticated ? <Form /> : <Navigate to="/login" />} />
        <Route path="/success" element={isAuthenticated ? <Success /> : <Navigate to="/login" />} />
        <Route path="/page2" element={isAuthenticated ? <Form2 /> : <Navigate to="/login" />} /> {/* 新しいルートを追加 */}
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
