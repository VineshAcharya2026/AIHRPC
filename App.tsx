
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LegalInfo from './pages/LegalInfo';
import HumanRightsIssues from './pages/HumanRightsIssues';
import GrievanceForm from './pages/GrievanceForm';
import ComplaintForm from './pages/ComplaintForm';
import Team from './pages/Team';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AIAssistant from './components/AIAssistant';
import { AuthState } from './types';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null
  });

  // Check for existing login on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('aihrpc_auth');
    if (savedAuth) {
      setAuth(JSON.parse(savedAuth));
    }
  }, []);

  const handleLogin = (user: { email: string; role: 'Admin' | 'Member' }) => {
    const newAuth: AuthState = { isAuthenticated: true, user };
    setAuth(newAuth);
    localStorage.setItem('aihrpc_auth', JSON.stringify(newAuth));
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, user: null });
    localStorage.removeItem('aihrpc_auth');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar auth={auth} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/legal-info" element={<LegalInfo />} />
            <Route path="/issues" element={<HumanRightsIssues />} />
            <Route path="/grievance" element={<GrievanceForm />} />
            <Route path="/complaint" element={<ComplaintForm />} />
            <Route 
              path="/team" 
              element={auth.isAuthenticated ? <Team /> : <Navigate to="/admin-login" />} 
            />
            <Route 
              path="/admin-login" 
              element={auth.isAuthenticated ? <Navigate to="/admin" /> : <AdminLogin onLogin={handleLogin} />} 
            />
            <Route 
              path="/admin/*" 
              element={auth.isAuthenticated ? <AdminDashboard auth={auth} /> : <Navigate to="/admin-login" />} 
            />
          </Routes>
        </main>
        <AIAssistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
