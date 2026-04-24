
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Info, Upload, AlertCircle } from 'lucide-react';
import { STATES_INDIA, COMPLAINT_CATEGORIES } from '../constants';

const ComplaintForm: React.FC = () => {
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
    incidentDate: '',
    location: '',
    against: '',
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
        body: JSON.stringify({ ...formData, type: 'Official Complaint' }),
      });

      if (!response.ok) throw new Error('Failed to submit complaint');
      
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
        <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-slate-200">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-8" />
          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase">Statutory Entry Recorded</h2>
          <p className="text-slate-500 mb-10 font-medium">
            Your official complaint has been logged. Our investigation wing will contact you for verification.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-slate-200">
            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-1">Investigation ID</span>
            <span className="text-3xl font-mono font-black text-[#800000]">{complaintId}</span>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-[#800000] text-white py-4 rounded-xl font-black text-lg hover:bg-black transition-all shadow-xl uppercase tracking-widest"
          >
            Return to HQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-[#800000] p-10 text-white flex justify-between items-center border-b-8 border-[#F58220]">
            <div>
              <h1 className="text-4xl font-black mb-2 tracking-tighter uppercase italic">Official Complaint Filing</h1>
              <p className="text-slate-300 font-medium uppercase text-xs tracking-widest">Formal Reporting under Indian Law Context.</p>
            </div>
            <AlertCircle className="w-16 h-16 text-[#F58220] hidden sm:block opacity-50" />
          </div>
          
          <form onSubmit={handleSubmit} className="p-10 space-y-10">
            {error && <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-red-100">{error}</div>}
            
            <div className="space-y-8">
              <h3 className="text-xs font-black text-[#800000] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Statutory Part 1: Complainant Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Legal Full Name *</span>
                  <input 
                    type="text" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Official Email *</span>
                  <input 
                    type="email" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Contact Number *</span>
                  <input 
                    type="tel" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.mobile}
                    onChange={e => setFormData({...formData, mobile: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">State Jurisdiction *</span>
                  <select 
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.state}
                    onChange={e => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select State</option>
                    {STATES_INDIA.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-black text-[#800000] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Statutory Part 2: Incident Logistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Date of Incident *</span>
                  <input 
                    type="date" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.incidentDate}
                    onChange={e => setFormData({...formData, incidentDate: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Violation Category *</span>
                  <select 
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    {COMPLAINT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Precise Location *</span>
                  <input 
                    type="text" required
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Accused Entity/Individual</span>
                  <input 
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                    value={formData.against}
                    onChange={e => setFormData({...formData, against: e.target.value})}
                  />
                </label>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-black text-[#800000] uppercase tracking-[0.3em] border-b border-slate-100 pb-4">Statutory Part 3: Evidentiary Statement</h3>
              <label className="block">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Chronological Account *</span>
                <textarea 
                  required rows={6}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] outline-none transition-all font-bold bg-slate-50"
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </label>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
               <div className="flex items-start">
                 <input 
                   type="checkbox" required id="consent"
                   className="mt-1.5 w-6 h-6 text-[#800000] border-slate-300 rounded focus:ring-[#800000]"
                   checked={formData.consent}
                   onChange={e => setFormData({...formData, consent: e.target.checked})}
                 />
                 <label htmlFor="consent" className="ml-5 text-[10px] text-slate-500 font-bold leading-relaxed uppercase tracking-wide">
                   I understand that providing false information is a punishable offence under Indian Law. I authorize AIHRPC to process this data for the purpose of assistance and reporting to appropriate statutory authorities.
                 </label>
               </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-6 rounded-[2rem] font-black text-xl flex items-center justify-center transition-all uppercase tracking-tighter shadow-2xl ${
                isSubmitting ? 'bg-slate-300 cursor-not-allowed text-slate-500' : 'bg-[#800000] text-white hover:bg-black'
              }`}
            >
              {isSubmitting ? 'Authenticating Submission...' : (
                <><Send className="mr-3 w-6 h-6" /> Lodge Official Complaint</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
