// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyComponent from './MyComponent';
import HiMessage from './HiMessage';

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/">MyComponent</Link>
        <Link to="/HiMessage">HiMessage</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/HiMessage" element={<HiMessage />} />
      </Routes>
    </Router>
  );
};

export default App;