
import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { LOGO_URL } from '../constants';

interface AdminLoginProps {
  onLogin: (user: { email: string; role: 'Admin' | 'Member' }) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Authentication failed');
      }

      const data = await response.json();
      onLogin({ email: username, role: data.role });
    } catch (err: any) {
      setError(err.message || 'Verification Error. Use: aihrpcindia / Roadies*1812');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-[2rem] mb-8 shadow-2xl border border-slate-200">
            <img 
              src={LOGO_URL} 
              alt="AIHRPC Official Logo" 
              className="h-16 object-contain"
            />
            <div className="text-left border-l pl-4 border-gray-100">
              <span className="block text-xl font-black text-[#800000] leading-tight uppercase tracking-tighter">AIHRPC</span>
              <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest">All India Human Rights<br/>Protection Commission</span>
            </div>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Registry Portal</h2>
          <p className="mt-3 text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Administrative Access Only</p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white">
          {error && (
            <div className="mb-8 p-5 bg-red-50 text-red-700 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-red-100 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span> {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Username / CID</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#800000] transition-colors" />
                <input 
                  type="text" required
                  className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] transition-all bg-slate-50 font-bold"
                  placeholder="aihrpcindia"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Access Key</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#800000] transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} required
                  className="w-full pl-12 pr-14 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] transition-all bg-slate-50 font-bold"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#800000] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center uppercase tracking-tighter ${
                isLoading ? 'bg-slate-300 cursor-not-allowed text-slate-500' : 'bg-[#800000] text-white hover:bg-black shadow-xl shadow-maroon-900/20'
              }`}
            >
              {isLoading ? 'Decrypting Credentials...' : (
                <>Enter Registry <ArrowRight className="ml-3 w-6 h-6" /></>
              )}
            </button>
          </form>
          
          <div className="mt-10 text-center pt-8 border-t border-slate-50">
            <p className="text-[9px] text-slate-400 uppercase font-black tracking-[0.2em] mb-4">Security Notice</p>
            <p className="text-[9px] text-slate-400 leading-relaxed font-medium max-w-[200px] mx-auto">
              Indian law prohibits unauthorized access. All activity is cryptographically logged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
