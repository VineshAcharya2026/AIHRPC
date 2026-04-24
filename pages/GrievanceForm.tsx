
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Upload } from 'lucide-react';
import { STATES_INDIA, COMPLAINT_CATEGORIES } from '../constants';

const GrievanceForm: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    district: '',
    category: '',
    description: '',
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Grievance' }),
      });

      if (!response.ok) throw new Error('Failed to submit grievance');
      
      const data = await response.json();
      setComplaintId(data.id);
      setIsSubmitted(true);
    } catch (err) {
      setError('Communication with server failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-slate-50">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Grievance Logged</h2>
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
            Thank you for bringing this to our attention. Our team will review your grievance and contact you shortly.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-slate-200">
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-1">Incident Tracking ID</span>
            <span className="text-3xl font-mono font-black text-[#800000]">{complaintId}</span>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-[#800000] text-white py-4 rounded-xl font-black text-lg hover:bg-black transition-all shadow-lg uppercase tracking-tight"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-[#800000] p-10 text-white relative">
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black/20 to-transparent"></div>
            <h1 className="text-4xl font-black mb-3 tracking-tighter">Public Grievance Registry</h1>
            <p className="text-slate-300 font-medium opacity-90 max-w-lg leading-relaxed">
              Official intake for human rights violations and administrative negligence reports.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-black uppercase tracking-widest border border-red-100">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <label className="block">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Full Legal Name *</span>
                  <input 
                    type="text" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                    placeholder="E.g. Rajesh Kumar"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Email Address *</span>
                  <input 
                    type="email" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                    placeholder="rajesh@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Mobile Contact *</span>
                  <input 
                    type="tel" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                    placeholder="+91 00000 00000"
                    value={formData.mobile}
                    onChange={e => setFormData({...formData, mobile: e.target.value})}
                  />
                </label>
              </div>

              <div className="space-y-6">
                <label className="block">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Jurisdiction (State) *</span>
                  <select 
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                    value={formData.state}
                    onChange={e => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select State</option>
                    {STATES_INDIA.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">District / Zone *</span>
                  <input 
                    type="text" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                    placeholder="District name"
                    value={formData.district}
                    onChange={e => setFormData({...formData, district: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Violation Category *</span>
                  <select 
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    {COMPLAINT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </label>
              </div>
            </div>

            <div>
              <label className="block">
                <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-2 block">Comprehensive Description *</span>
                <textarea 
                  required rows={6}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#800000] outline-none transition-all font-medium bg-slate-50"
                  placeholder="Provide a detailed chronological account of the incident..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </label>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start">
              <input 
                type="checkbox" required id="consent"
                className="mt-1.5 w-5 h-5 text-[#800000] border-slate-300 rounded focus:ring-[#800000]"
                checked={formData.consent}
                onChange={e => setFormData({...formData, consent: e.target.checked})}
              />
              <label htmlFor="consent" className="ml-4 text-xs text-slate-500 font-medium leading-relaxed">
                I hereby declare that the information provided is true and verifiable. I understand that AIHRPC India is an independent non-statutory body working for human rights advocacy and legal assistance.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center transition-all ${
                isSubmitting ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#F58220] text-white hover:bg-black shadow-xl shadow-orange-900/10 uppercase tracking-tight'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Registering Filing...
                </div>
              ) : <><Send className="mr-3 w-6 h-6" /> Submit Grievance Record</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrievanceForm;
